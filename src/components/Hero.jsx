import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HERO, BRAND } from '../data/content.js';
import ParticleCanvas from './ParticleCanvas.jsx';
import MagneticButton from './MagneticButton.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import useParallax from '../hooks/useParallax.js';

export default function Hero() {
  const eyeRef = useRef(null);
  const subRef = useRef(null);
  const ctasRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Parallax on the background orbs
  useParallax(orb1Ref, { speed: 0.4, trigger: '#hero' });
  useParallax(orb2Ref, { speed: 0.25, trigger: '#hero' });
  // Subtle content drift upward on scroll
  useParallax(contentRef, { speed: 0.15, trigger: '#hero' });

  useEffect(() => {
    // Helper: split a line element into individual char spans
    const splitLine = (lineEl) => {
      const text = lineEl.textContent;
      const em = lineEl.querySelector('em');

      if (em) {
        // Handle lines with <em> — split manually keeping the em tag
        const beforeText = text.slice(0, text.indexOf(em.textContent));
        const emText = em.textContent;
        const afterText = text.slice(text.indexOf(em.textContent) + emText.length);

        const spans = [];

        const makeCharSpan = (char, isEm = false) => {
          const s = document.createElement('span');
          s.className = `split-char${isEm ? ' gr-char' : ''}`;
          if (char === ' ') {
            s.innerHTML = '&nbsp;';
          } else {
            s.textContent = char;
          }
          s.style.display = 'inline-block';
          spans.push(s);
          return s;
        };

        lineEl.innerHTML = '';
        beforeText.split('').forEach((c) => lineEl.appendChild(makeCharSpan(c)));
        const emEl = document.createElement('em');
        emEl.className = 'gr';
        emEl.style.fontStyle = 'normal';
        emText.split('').forEach((c) => {
          const s = makeCharSpan(c, true);
          emEl.appendChild(s);
        });
        lineEl.appendChild(emEl);
        afterText.split('').forEach((c) => lineEl.appendChild(makeCharSpan(c)));
        return spans;
      }

      // Simple text line
      lineEl.innerHTML = '';
      return text.split('').map((char) => {
        const s = document.createElement('span');
        s.className = 'split-char';
        if (char === ' ') {
          s.innerHTML = '&nbsp;';
        } else {
          s.textContent = char;
        }
        s.style.display = 'inline-block';
        lineEl.appendChild(s);
        return s;
      });
    };

    const chars1 = splitLine(line1Ref.current);
    const chars2 = splitLine(line2Ref.current);
    const chars3 = splitLine(line3Ref.current);

    // Set initial state
    gsap.set([chars1, chars2, chars3], { opacity: 0, y: '110%', rotateZ: 3 });
    gsap.set(eyeRef.current, { opacity: 0, y: 14 });
    gsap.set(subRef.current, { opacity: 0, y: 14 });
    gsap.set(ctasRef.current, { opacity: 0, y: 14 });

    const tl = gsap.timeline({ delay: 0.1 });

    // Eyebrow
    tl.to(eyeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });

    // Headline — wave of chars across all 3 lines
    const allChars = [...chars1, ...chars2, ...chars3];
    tl.to(
      allChars,
      {
        opacity: 1,
        y: '0%',
        rotateZ: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: {
          amount: 0.65,
          from: 'start',
        },
      },
      '-=0.3'
    );

    // Sub + CTAs
    tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  }, []);

  return (
    <section id="hero" ref={sectionRef}>
      <ParticleCanvas targetId="hero" />
      <div className="h-orb" ref={orb1Ref}></div>
      <div className="h-orb2" ref={orb2Ref}></div>
      <div className="h-cnt" ref={contentRef}>
        <div className="h-eye" ref={eyeRef}>
          <span className="h-eye-dot"></span>
          {HERO.eyebrow}
        </div>
        <h1 className="h-hl">
          <span className="ln"><span ref={line1Ref}>Turn Your Website</span></span>
          <span className="ln"><span ref={line2Ref}>Into a <em className="gr">24/7 Sales</em></span></span>
          <span className="ln"><span ref={line3Ref}>Engine.</span></span>
        </h1>
        <p className="h-sub" ref={subRef}>
          {HERO.sub}
        </p>
        <div className="h-ctas" ref={ctasRef}>
          <MagneticButton
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            className="btn-wa"
            style={{ fontSize: 15, padding: '12px 24px' }}
          >
            <WhatsAppIcon /> WhatsApp Me
          </MagneticButton>
          <a href="#port" className="btn btn-s mag" style={{ fontSize: 15, padding: '12px 24px' }}>
            See Our Work
          </a>
          <a href="#packages" className="btn btn-g mag" style={{ fontSize: 15, padding: '12px 24px' }}>
            View Pricing
          </a>
        </div>
      </div>
      <div className="h-scr">
        <div className="scrl"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
