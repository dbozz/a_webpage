const menuButton = document.querySelector('.menu-button');
const siteNav = document.getElementById('site-nav');
const yearEl = document.getElementById('year');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('show');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
