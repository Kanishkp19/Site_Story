import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

/**
 * Text scramble effect for eyebrow labels.
 * When the element enters the viewport, characters cycle through random glyphs
 * before landing on the real character — Lusion-style.
 *
 * @param {React.RefObject} ref        - ref to the container (section)
 * @param {string}          selector   - CSS selector for .eye elements inside the container
 */
export default function useTextScramble(ref, selector = '.eye') {
  useEffect(() => {
    const root = ref?.current;
    if (!root) return;

    const elements = root.querySelectorAll(selector);
    if (!elements.length) return;

    const cleanups = [];

    elements.forEach((el) => {
      const original = el.textContent;
      let frame = 0;
      let rafId = null;
      let triggered = false;

      const scramble = () => {
        frame++;
        const progress = frame / 28; // total scramble duration in frames
        el.textContent = original
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            // Reveal chars left to right progressively
            if (i < Math.floor(progress * original.length)) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');

        if (frame < 28) {
          rafId = requestAnimationFrame(scramble);
        } else {
          el.textContent = original;
        }
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => {
          if (triggered) return;
          triggered = true;
          frame = 0;
          rafId = requestAnimationFrame(scramble);
        },
      });

      cleanups.push(() => {
        st.kill();
        if (rafId) cancelAnimationFrame(rafId);
        el.textContent = original;
      });
    });

    return () => cleanups.forEach((fn) => fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
