/**
 * cssnano's `colormin` rewrites rgb()/rgba() into hsl()/hsla() when that is
 * shorter. The HSL round-trip is lossy: #ffb4ab at 30% alpha came back as
 * rgb(255 182 173), visibly shifting the architecture diagram's border
 * colours. Minify, but never rewrite colours.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', { colormin: false }],
    },
  },
};
