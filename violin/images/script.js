// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    
    // Apri menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Blocca scroll
        });
    }
    
    // Chiudi menu
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Ripristina scroll
        });
    }
    
    // Chiudi menu cliccando fuori
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Cookie Banner
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptBtn = document.querySelector('.cookie-accept');

    if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('active');
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('active');
        });
    }
});