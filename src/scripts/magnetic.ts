export function initMagnetic() {
  const magnets = document.querySelectorAll<HTMLElement>('[data-magnetic]');

  magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnet.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      const x = middleX * 0.3;
      const y = middleY * 0.3;

      magnet.style.transform = `translate(${x}px, ${y}px)`;
      magnet.style.transition = 'none'; // Instant follow
    });

    magnet.addEventListener('mouseleave', () => {
      magnet.style.transform = 'translate(0px, 0px)';
      // Spring-like return
      magnet.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    });
  });
}
