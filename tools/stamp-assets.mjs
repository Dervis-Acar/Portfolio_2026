/**
 * Content-hashes the site's local assets into every page's URL, e.g.
 *   assets/css/site.css?v=65fd67fddb
 *   assets/js/mobile-menu.js?v=1a2b3c4d5e
 *
 * Why this exists: the site broke in production because browsers held a
 * cached copy of the old CSS/JS while being served fresh HTML - the markup
 * referenced classes and rules that the stale files did not define, so the
 * page rendered black-on-black with no layout. A content hash in the URL
 * makes that impossible: changed asset -> new URL -> browser must refetch;
 * unchanged asset -> same URL -> stays cached.
 *
 * Run with --check to verify without writing (used by CI).
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';

const ASSETS = [
  { path: 'assets/css/site.css', attr: 'href' },
  { path: 'assets/js/mobile-menu.js', attr: 'src' },
];

const check = process.argv.includes('--check');

const hashOf = (file) =>
  createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 10);

const pages = readdirSync('.').filter((f) => f.endsWith('.html'));
const changed = new Set();
const problems = [];

for (const { path, attr } of ASSETS) {
  if (!existsSync(path)) {
    problems.push(`missing built asset: ${path}`);
    continue;
  }
  const hash = hashOf(path);
  console.log(`${path}  ->  ?v=${hash}`);

  // Match the asset's URL with or without an existing ?v= stamp.
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${attr}=")${escaped}(?:\\?v=[a-f0-9]+)?(")`, 'g');

  for (const page of pages) {
    const before = readFileSync(page, 'utf8');
    if (!re.test(before)) {
      // Not every page has to reference every asset, but every page must
      // have the stylesheet.
      if (path.endsWith('.css')) problems.push(`${page}: no <link> to ${path}`);
      re.lastIndex = 0;
      continue;
    }
    re.lastIndex = 0;
    const after = before.replace(re, `$1${path}?v=${hash}$2`);
    if (after !== before) {
      changed.add(page);
      if (!check) writeFileSync(page, after);
    }
  }
}

if (problems.length) {
  for (const p of problems) console.error(`ERROR: ${p}`);
  process.exit(1);
}

const list = [...changed].sort();
if (check) {
  if (list.length) {
    console.error(
      `\nERROR: asset hashes are stale in:\n  ${list.join('\n  ')}\n` +
        `Run \`npm run build:css\` and commit the result.`
    );
    process.exit(1);
  }
  console.log(`\nAll ${pages.length} pages reference current asset hashes.`);
} else {
  console.log(
    list.length ? `\nStamped ${list.length} page(s): ${list.join(', ')}` : '\nAlready up to date.'
  );
}
