window.addEventListener('scroll', function () {
  var header = document.getElementById('main-header');
  if (window.scrollY > 80) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

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
