(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!toggle || !nav) return;
  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
})();

(() => {
  if (!location.pathname.endsWith('/') && !location.pathname.endsWith('/index.html')) return;
  const destinations = {'#books':'books.html','#left-behind-west':'research.html','#teaching':'teaching.html','#public-writing':'public-writing.html','#public-history':'public-writing.html','#articles':'publications.html','#contact':'contact.html'};
  if (destinations[location.hash]) location.replace(destinations[location.hash]);
})();
