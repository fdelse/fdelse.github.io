window.addEventListener('scroll', function () {
  var header = document.getElementById('main-header');
  if (window.scrollY > 80) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

// Cookie banner
(function () {
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;
  if (localStorage.getItem('cookie-consent')) {
    banner.style.display = 'none';
    return;
  }
  banner.querySelector('.btn-cookie-accept').addEventListener('click', function () {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.style.display = 'none';
  });
  banner.querySelector('.btn-cookie-reject').addEventListener('click', function () {
    localStorage.setItem('cookie-consent', 'rejected');
    banner.style.display = 'none';
  });
})();

// Hamburger menu toggle
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    hamburger.innerHTML = nav.classList.contains('open') ? '&#10005;' : '&#9776;';
  });

  // Chiudi il menu cliccando su un link
  document.querySelectorAll('#top-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      hamburger.innerHTML = '&#9776;';
    });
  });
}
