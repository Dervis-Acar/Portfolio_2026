document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    const menuBtn = nav.querySelector('button');
    if (!menuBtn) return;
    
    // Create mobile menu container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed top-[72px] left-0 w-full bg-surface/95 backdrop-blur-3xl border-b border-primary/20 p-6 flex flex-col gap-6 hidden md:hidden z-40 shadow-2xl';
    
    mobileMenu.innerHTML = `
        <a href="projects.html" class="font-label-caps tracking-widest text-sm text-on-surface hover:text-[#00ffff] transition-colors">PROJECTS</a>
        <a href="experience.html" class="font-label-caps tracking-widest text-sm text-on-surface hover:text-[#00ffff] transition-colors">EXPERIENCE</a>
        <a href="stack.html" class="font-label-caps tracking-widest text-sm text-on-surface hover:text-[#00ffff] transition-colors">STACK</a>
        <a href="contact.html" class="font-label-caps tracking-widest text-sm text-on-surface hover:text-[#00ffff] transition-colors">CONTACT</a>
        <a href="contact.html" class="mt-4 bg-primary text-on-primary font-label-caps text-center px-6 py-3 rounded hover:shadow-[0_0_15px_rgba(207,188,255,0.5)] transition-all">GET IN TOUCH</a>
    `;
    
    document.body.appendChild(mobileMenu);
    
    let isOpen = false;
    menuBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            menuBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
        } else {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
        }
    });
});
