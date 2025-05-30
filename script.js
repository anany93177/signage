// Highlight the current page in the navbar
const currentLocation = window.location.href;
const menuItem = document.querySelectorAll(".navbar a");

menuItem.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
});

// Scroll-triggered fade-in animation
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about-section');
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionTop < screenPosition) {
    aboutSection.classList.add('fade-in');
  }
});
