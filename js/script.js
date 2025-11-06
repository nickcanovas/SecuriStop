// tiny script for mobile nav and simple helpers
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'flex';
    });

    // ensure nav shows on resize for desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) nav.style.display = 'flex';
      else nav.style.display = 'none';
    });
  }
});