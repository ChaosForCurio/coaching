/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    /** Recalculates the horizontal scroll logic in the Courses section (e.g., after filtering). */
    recalcCoursesScroll?: () => void;
  }
}

export {};
