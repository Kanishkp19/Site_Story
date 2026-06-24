import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered reveal animations with multiple animation types.
 *
 * @param {React.RefObject} ref       - section container ref
 * @param {string}          selector  - CSS selector scoped inside ref
 * @param {object}          options
 * @param {number}  [options.stagger=0]
 * @param {string}  [options.trigger]   - inner selector to use as ScrollTrigger trigger
 * @param {string}  [options.start='top 80%']
 * @param {'fadeUp'|'scaleIn'|'clipReveal'|'slideLeft'|'slideRight'} [options.animation='fadeUp']
 * @param {number}  [options.duration=0.75]
 */
export default function useScrollReveal(ref, selector, options = {}) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = root.querySelectorAll(selector);
    if (!els.length) return;

    const triggerEl = options.trigger
      ? root.querySelector(options.trigger) || root
      : root;

    const duration = options.duration || 0.75;
    const ease = 'power3.out';
    const anim = options.animation || 'fadeUp';

    let tween;

    if (anim === 'clipReveal') {
      // Set initial clip-path
      gsap.set(els, {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 1,
        y: 0,
      });
      tween = gsap.to(els, {
        clipPath: 'inset(0 0% 0 0)',
        duration,
        ease,
        stagger: options.stagger || 0,
        scrollTrigger: {
          trigger: triggerEl,
          start: options.start || 'top 80%',
        },
      });
    } else if (anim === 'scaleIn') {
      gsap.set(els, { opacity: 0, scale: 0.88, y: 16 });
      tween = gsap.to(els, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration,
        ease,
        stagger: options.stagger || 0,
        scrollTrigger: {
          trigger: triggerEl,
          start: options.start || 'top 80%',
        },
      });
    } else if (anim === 'slideLeft') {
      tween = gsap.to(els, {
        opacity: 1,
        x: 0,
        duration,
        ease,
        stagger: options.stagger || 0,
        scrollTrigger: {
          trigger: triggerEl,
          start: options.start || 'top 80%',
        },
      });
    } else if (anim === 'slideRight') {
      gsap.set(els, { opacity: 0, x: 40 });
      tween = gsap.to(els, {
        opacity: 1,
        x: 0,
        duration,
        ease,
        stagger: options.stagger || 0,
        scrollTrigger: {
          trigger: triggerEl,
          start: options.start || 'top 80%',
        },
      });
    } else {
      // Default: fadeUp
      tween = gsap.to(els, {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        ease,
        stagger: options.stagger || 0,
        scrollTrigger: {
          trigger: triggerEl,
          start: options.start || 'top 80%',
        },
      });
    }

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
