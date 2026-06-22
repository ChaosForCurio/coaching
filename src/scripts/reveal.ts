export function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% visible
      rootMargin: '0px 0px -50px 0px',
    }
  );

  const elements = document.querySelectorAll('[data-reveal]');
  elements.forEach((el) => observer.observe(el));
}
