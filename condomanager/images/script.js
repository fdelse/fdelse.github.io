(function() {
    var hamburgerBtn = document.querySelector('.hamburger-btn');
    var navMenu = document.querySelector('.nav-menu');
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
    }

    window.addEventListener('scroll', function() {
        var header = document.querySelector('.ct-header');
        if (header && !header.classList.contains('always-scrolled')) {
            header.classList[window.scrollY > 50 ? 'add' : 'remove']('scrolled');
        }
    }, { passive: true });

    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    if (!localStorage.getItem('cookie_consent')) {
        setTimeout(function() { banner.classList.add('visible'); }, 600);
    }
    document.getElementById('cookieAccept').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'all');
        banner.classList.remove('visible');
    });
    document.getElementById('cookieReject').addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'necessary');
        banner.classList.remove('visible');
    });
})();

function loadGoogleMap(el) {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4719012997703!2d-4.4656717258010605!3d36.711226272712764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7431258e9bb%3A0xab9c1bffa594859!2sC.%20Mefistofeles%2C%2019%2C%20Teatinos-Universidad%2C%2029006%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1778074804239!5m2!1ses!2ses';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.title = 'Sede Pegaso Fincas - Calle Mefistofeles 19, Málaga';
    var h = el.getAttribute('data-height') || '420';
    iframe.style.cssText = 'border:0;display:block;width:100%;height:' + h + 'px;';
    el.parentNode.replaceChild(iframe, el);
}
