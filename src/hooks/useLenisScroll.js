import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * useLenisScroll
 * Initializes Lenis smooth scrolling for the whole page. Skips
 * entirely if the user prefers reduced motion, falling back to
 * native scroll behavior.
 */
export default function useLenisScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
