document.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // HAMBURGER MENU
    // ==============================
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    // Gestione header trasparente con scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.ct-header');
        if (header && !header.classList.contains('always-scrolled')) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // ==============================
    // COOKIE BANNER
    // ==============================
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    const consent = localStorage.getItem('cookie_consent');

    // Mostra il banner se non è stato ancora espresso un consenso
    if (!consent) {
        setTimeout(() => banner.classList.add('visible'), 600);
    }

    document.getElementById('cookieAccept').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'all');
        banner.classList.remove('visible');
    });

    document.getElementById('cookieReject').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'necessary');
        banner.classList.remove('visible');
    });
});