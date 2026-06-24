import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initialises a singleton Lenis instance and syncs it with GSAP's ticker
 * so ScrollTrigger always gets accurate scroll positions.
 */
export default function useLenis() {
  useEffect(() => {
    if (lenisInstance) return; // Already initialised

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Keep the instance alive across HMR reloads in dev —
      // only destroy on true unmount (page unload)
    };
  }, []);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
