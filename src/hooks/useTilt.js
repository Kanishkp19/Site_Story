import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Attach a subtle 3D tilt-on-hover effect to the returned ref.
export default function useTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, {
        rotateY: x * 14,
        rotateX: -y * 14,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 900,
      });
    };
    const handleLeave = () => {
      gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.65, ease: 'elastic.out(1,0.5)' });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return ref;
}
