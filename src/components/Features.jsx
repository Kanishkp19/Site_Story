import React, { useRef } from 'react';
import { FEATURES } from '../data/content.js';
import useScrollReveal from '../hooks/useScrollReveal.js';
import useTextScramble from '../hooks/useTextScramble.js';

export default function Features() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.eye', { stagger: 0.05 });
  useScrollReveal(sectionRef, '.t1, .t-sub', { stagger: 0.07, animation: 'fadeUp' });
  useScrollReveal(sectionRef, '.fc', {
    stagger: 0.09,
    trigger: '.feat-g',
    animation: 'scaleIn',
    duration: 0.85,
  });
  useTextScramble(sectionRef);

  const handleSpotlight = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', e.clientX - r.left + 'px');
    card.style.setProperty('--my', e.clientY - r.top + 'px');
  };

  return (
    <section id="feat" className="sec" ref={sectionRef}>
      <div className="sec-hd">
        <span className="eye">What We Build</span>
        <h2 className="t1">
          Everything handled,
          <br />
          end to end.
        </h2>
        <p className="t-sub">
          You focus on running your business. We handle the technology — from concept to launch and beyond.
        </p>
      </div>
      <div className="feat-g">
        {FEATURES.map((f, i) => (
          <div className="fc" key={i} onMouseMove={handleSpotlight}>
            <div className="fi">{f.icon}</div>
            <h3 className="ft">{f.title}</h3>
            <p className="fd2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
