import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): Lenis {
  if (typeof window === 'undefined') return {} as Lenis;

  // Return existing singleton if already initialized
  if (window.__lenis) {
    return window.__lenis;
  }

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false,
  });

  window.__lenis = lenis;
  lenisInstance = lenis;

  // Synchronize Lenis scroll with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Synchronize Lenis's RAF directly with GSAP's ticker
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Handle in-page anchor links smoothly
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target as HTMLElement, {
            offset: -80,
            duration: 1.2,
          });
        }
      }
    });
  });

  return lenis;
}

export function getLenis(): Lenis | null {
  return window.__lenis || lenisInstance;
}
