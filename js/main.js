/* ================================================
   Adeyemi & Partners — main.js
   Navbar toggle fallback (if Bootstrap JS fails)
   ================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* Only apply if Bootstrap's Collapse plugin did not load */
  if (window.bootstrap && window.bootstrap.Collapse) return;

  var toggler = document.querySelector('.navbar-toggler');
  var menu    = document.getElementById('mainNav');
  if (!toggler || !menu) return;

  toggler.addEventListener('click', function () {
    var open = menu.classList.toggle('show');
    toggler.setAttribute('aria-expanded', open.toString());
  });

  /* Close menu when a nav link is clicked */
  menu.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('show');
      toggler.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close menu when clicking outside */
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('show') &&
        !menu.contains(e.target) &&
        !toggler.contains(e.target)) {
      menu.classList.remove('show');
      toggler.setAttribute('aria-expanded', 'false');
    }
  });

});
