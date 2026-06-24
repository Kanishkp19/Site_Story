import React, { useRef } from 'react';
import { PORTFOLIO } from '../data/content.js';
import PortfolioCard from './PortfolioCard.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import useTextScramble from '../hooks/useTextScramble.js';

export default function Portfolio() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.eye', { stagger: 0.05 });
  useScrollReveal(sectionRef, '.t1, .t-sub', { stagger: 0.06, animation: 'fadeUp' });
  useScrollReveal(sectionRef, '.pc', {
    stagger: 0.11,
    trigger: '.port-g',
    animation: 'scaleIn',
    duration: 0.85,
    start: 'top 82%',
  });
  useTextScramble(sectionRef);

  return (
    <section id="port" className="sec" style={{ paddingTop: 0 }} ref={sectionRef}>
      <div className="sec-hd">
        <span className="eye">Our Work</span>
        <h2 className="t1">
          Websites we build
          <br />
          for businesses.
        </h2>
        <p className="t-sub">
          Each project is custom-designed from scratch — tailored to the business, its audience, and its goals.
        </p>
      </div>
      <div className="port-g">
        {PORTFOLIO.map((item) => (
          <PortfolioCard item={item} key={item.key} />
        ))}
      </div>
    </section>
  );
}
