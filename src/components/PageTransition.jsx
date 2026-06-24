import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { getLenis } from '../hooks/useLenis.js';

/**
 * Full-screen curtain wipe that plays on anchor nav-link clicks.
 * A clip-path panel sweeps in from the bottom, then retracts upward,
 * while Lenis scrolls to the target section beneath.
 */
export default function PageTransition() {
  const curtainRef = useRef(null);

  useEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;

    const handleNavClick = (e) => {
      const anchor = e.currentTarget;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const lenis = getLenis();

      const tl = gsap.timeline();

      // Sweep in
      tl.set(curtain, { display: 'block', clipPath: 'inset(100% 0% 0% 0%)' })
        .to(curtain, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.55,
          ease: 'power4.inOut',
        })
        // Scroll during the hold
        .add(() => {
          if (lenis) {
            lenis.scrollTo(target, { immediate: true });
          } else {
            target.scrollIntoView();
          }
        })
        // Sweep out
        .to(curtain, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.55,
          ease: 'power4.inOut',
          delay: 0.05,
        })
        .set(curtain, { display: 'none' });
    };

    // Attach to all nav anchor links
    const links = document.querySelectorAll('.nav-links a, .nav-r a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', handleNavClick));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleNavClick));
    };
  }, []);

  return <div id="page-curtain" ref={curtainRef} aria-hidden="true" />;
}
