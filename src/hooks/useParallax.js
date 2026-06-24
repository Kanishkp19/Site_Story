import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Attaches a GSAP scrub-based parallax to an element.
 * @param {React.RefObject} ref - ref to the element to move
 * @param {object} opts
 * @param {number} [opts.speed=0.3]      - how far to drift (yPercent magnitude)
 * @param {string} [opts.trigger]        - optional CSS selector for the scroll trigger element
 * @param {'y'|'x'} [opts.axis='y']
 */
export default function useParallax(ref, opts = {}) {
  const { speed = 0.3, trigger, axis = 'y' } = opts;

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const triggerEl = trigger ? document.querySelector(trigger) : el.parentElement || el;
    const prop = axis === 'y' ? 'yPercent' : 'xPercent';

    const tween = gsap.fromTo(
      el,
      { [prop]: speed * -50 },
      {
        [prop]: speed * 50,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
