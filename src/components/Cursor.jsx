import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;
    const label = labelRef.current;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    // GSAP quickTo for silky smooth lerp
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3.out' });
    const trailX = gsap.quickTo(trail, 'x', { duration: 0.9, ease: 'power3.out' });
    const trailY = gsap.quickTo(trail, 'y', { duration: 0.9, ease: 'power3.out' });

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      // Dot: instant
      gsap.set(dot, { x: mx, y: my });

      // Ring: smooth follow
      ringX(mx);
      ringY(my);

      // Trail: extra smooth
      trailX(mx);
      trailY(my);
    };

    document.addEventListener('mousemove', onMove);

    // --- State changes ---

    const setDefault = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(ring, {
        scale: 1,
        width: 38,
        height: 38,
        borderColor: 'rgba(255,255,255,0.25)',
        backgroundColor: 'transparent',
        duration: 0.35,
        ease: 'power2.out',
      });
      gsap.to(label, { opacity: 0, scale: 0.8, duration: 0.2 });
    };

    const setHover = () => {
      gsap.to(dot, { scale: 0.4, opacity: 0.6, duration: 0.3 });
      gsap.to(ring, {
        scale: 1,
        width: 58,
        height: 58,
        borderColor: 'rgba(255,255,255,0.5)',
        backgroundColor: 'rgba(255,255,255,0.04)',
        duration: 0.35,
        ease: 'power2.out',
      });
    };

    const setClick = () => {
      gsap.to(ring, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 });
    };

    const setPortfolio = () => {
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(ring, {
        width: 88,
        height: 88,
        borderColor: 'rgba(255,255,255,0.15)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(label, { opacity: 1, scale: 1, duration: 0.3 });
    };

    const setMagnetic = () => {
      gsap.to(dot, { scale: 0.5, opacity: 0.5, duration: 0.25 });
      gsap.to(ring, {
        width: 52,
        height: 52,
        borderColor: 'rgba(124,58,237,0.6)',
        backgroundColor: 'rgba(124,58,237,0.08)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const bind = () => {
      // Magnetic / interactive buttons
      document.querySelectorAll('a.mag, button.mag, .btn').forEach((el) => {
        el.addEventListener('mouseenter', setMagnetic);
        el.addEventListener('mouseleave', setDefault);
      });

      // Regular links
      document.querySelectorAll('a:not(.mag):not(.btn), button:not(.mag)').forEach((el) => {
        el.addEventListener('mouseenter', setHover);
        el.addEventListener('mouseleave', setDefault);
      });

      // Portfolio cards — show "View" label
      document.querySelectorAll('.pc').forEach((el) => {
        el.addEventListener('mouseenter', setPortfolio);
        el.addEventListener('mouseleave', setDefault);
      });

      // Feature cards
      document.querySelectorAll('.fc').forEach((el) => {
        el.addEventListener('mouseenter', setHover);
        el.addEventListener('mouseleave', setDefault);
      });
    };

    bind();
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousedown', setClick);
    document.addEventListener('mouseup', setDefault);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', setClick);
      document.removeEventListener('mouseup', setDefault);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Trailing ghost dot */}
      <div id="cur-trail" ref={trailRef} aria-hidden="true" />
      {/* Main dot */}
      <div id="cur" ref={dotRef} aria-hidden="true" />
      {/* Expanding ring */}
      <div id="cur-r" ref={ringRef} aria-hidden="true">
        <span id="cur-label" ref={labelRef}>View</span>
      </div>
    </>
  );
}
