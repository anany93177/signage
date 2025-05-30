// Fade-in animation on scroll
const items = document.querySelectorAll('.portfolio-item');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
