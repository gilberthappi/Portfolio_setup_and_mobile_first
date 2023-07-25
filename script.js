const humburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuLinks = document.querySelectorAll('.navLinks ul li a');

// Toggle mobile navigation menu
humburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scrolling to the corresponding sections
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      // Hide mobile navigation menu after clicking on a link
      if (navLinks.classList.contains('show')) {
        if (event.target.tagName === 'A' || event.target.tagName === 'I') {
          navLinks.classList.remove('show');
        }
      }
    }
  });
});
