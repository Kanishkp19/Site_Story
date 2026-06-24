import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * A thin gradient progress bar pinned to the top of the viewport.
 * Fills as the user scrolls from top to bottom of the page.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const st = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(bar, {
          scaleX: self.progress,
          duration: 0.15,
          ease: 'none',
          overwrite: true,
        });
      },
    });

    return () => st.kill();
  }, []);

  return <div id="scroll-progress" ref={barRef} aria-hidden="true" />;
}
