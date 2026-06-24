import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Magnetic button hook — upgraded with:
 * - Stronger pull radius
 * - Subtle tilt toward cursor (rotateX / rotateY)
 * - Cursor-following sheen highlight via CSS custom props
 */
export default function useMagnetic() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Create sheen overlay
    const sheen = document.createElement('span');
    sheen.className = 'mag-sheen';
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.appendChild(sheen);

    const handleMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // Magnetic pull
      gsap.to(el, {
        x: dx * 0.28,
        y: dy * 0.28,
        rotateX: (dy / r.height) * -12,
        rotateY: (dx / r.width) * 12,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 600,
        transformOrigin: 'center center',
      });

      // Sheen position
      const px = ((e.clientX - r.left) / r.width) * 100;
      const py = ((e.clientY - r.top) / r.height) * 100;
      gsap.to(sheen, {
        '--sheen-x': `${px}%`,
        '--sheen-y': `${py}%`,
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
      });
      gsap.to(sheen, { opacity: 0, duration: 0.4 });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
      if (sheen.parentNode === el) el.removeChild(sheen);
    };
  }, []);

  return ref;
}
