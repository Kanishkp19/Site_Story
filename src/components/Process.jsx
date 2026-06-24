import React, { useRef } from 'react';
import { PROCESS } from '../data/content.js';
import useScrollReveal from '../hooks/useScrollReveal.js';
import useTextScramble from '../hooks/useTextScramble.js';

export default function Process() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.eye', { stagger: 0.05 });
  useScrollReveal(sectionRef, '.t1', { stagger: 0.05, animation: 'fadeUp' });
  useScrollReveal(sectionRef, '.proc-st', {
    stagger: 0.16,
    trigger: '.proc-g',
    animation: 'scaleIn',
    duration: 0.8,
  });
  useTextScramble(sectionRef);

  return (
    <section id="proc" className="sec" ref={sectionRef}>
      <div className="sec-hd">
        <span className="eye">How It Works</span>
        <h2 className="t1">
          From conversation
          <br />
          to live in days.
        </h2>
      </div>
      <div className="proc-g">
        {PROCESS.map((p) => (
          <div className="proc-st" key={p.n}>
            <p className="proc-n">{p.n}</p>
            <div className="proc-ic">{p.icon}</div>
            <h3 className="proc-t">{p.title}</h3>
            <p className="proc-d">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
