document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header[data-site-header]');
    if (!header) return;

    const toggle = header.querySelector('[data-menu-toggle]');
    if (!toggle) return;

    const current = (document.body.dataset.page || '').toLowerCase();

    const links = [
        ['projects.html', 'Projects'],
        ['experience.html', 'Experience'],
        ['stack.html', 'Stack'],
        ['contact.html', 'Contact']
    ];

    const menu = document.createElement('div');
    menu.id = 'mobile-menu';
    menu.hidden = true;
    menu.className = 'fixed left-0 right-0 top-[var(--nav-h)] z-40 md:hidden border-b border-line bg-ink';

    menu.innerHTML = `
        <nav class="wrap flex flex-col py-2">
            ${links.map(([href, label]) => `
            <a href="${href}"
               class="border-b border-line py-4 text-[15px] link-quiet"
               ${current === href.replace('.html', '') ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
            <a href="contact.html" class="btn btn-primary mt-5 mb-4 w-full">Get in touch</a>
        </nav>
    `;

    header.insertAdjacentElement('afterend', menu);

    const icon = toggle.querySelector('.material-symbols-outlined');

    const setOpen = (open) => {
        menu.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        if (icon) icon.textContent = open ? 'close' : 'menu';
    };

    toggle.addEventListener('click', () => setOpen(menu.hidden));

    menu.addEventListener('click', (e) => {
        if (e.target.closest('a')) setOpen(false);
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.hidden) setOpen(false);
    });

    const mq = window.matchMedia('(min-width: 768px)');
    mq.addEventListener('change', (e) => {
        if (e.matches) setOpen(false);
    });
});
