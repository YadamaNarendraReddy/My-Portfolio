// Toggle Menu for Hamburger Navigation
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Fade-in effect on load
  document.body.style.opacity = "1";

  // GSAP Scroll Animations
  gsap.from(".fade-in", {
      scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out"
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true
  });
});
