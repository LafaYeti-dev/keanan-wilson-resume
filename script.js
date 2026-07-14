const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const navigationLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setMenu(false);
  }
});

document.addEventListener('click', (event) => {
  if (!header.contains(event.target)) {
    setMenu(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});

const desktopQuery = window.matchMedia('(min-width: 821px)');
desktopQuery.addEventListener('change', () => setMenu(false));

if ('IntersectionObserver' in window) {
  const sections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const sectionObserver = new IntersectionObserver((entries) => {
    const activeEntry = entries.find((entry) => entry.isIntersecting);

    if (!activeEntry) {
      return;
    }

    navigationLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${activeEntry.target.id}`;

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0,
  });

  sections.forEach((section) => sectionObserver.observe(section));
}
