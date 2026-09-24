const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const dropdowns = document.querySelectorAll('.has-dropdown');

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('a');

  if (!trigger) return;

  trigger.addEventListener('click', (event) => {
    const isMobile = window.innerWidth <= 900;

    if (!isMobile) return;

    event.preventDefault();
    const isOpen = dropdown.classList.toggle('open');
    dropdowns.forEach((item) => {
      if (item !== dropdown) item.classList.remove('open');
    });
    trigger.setAttribute('aria-expanded', String(isOpen));
  });
});

document.addEventListener('click', (event) => {
  const target = event.target;

  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(target)) {
      dropdown.classList.remove('open');
      const trigger = dropdown.querySelector('a');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }
  });
});
