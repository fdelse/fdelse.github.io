window.addEventListener('scroll', function () {
  var header = document.getElementById('main-header');
  if (window.scrollY > 80) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
