import React, { useRef } from 'react';
import { ADDONS } from '../data/content.js';
import useScrollReveal from '../hooks/useScrollReveal.js';
import useTextScramble from '../hooks/useTextScramble.js';

export default function AddOns() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.eye', { stagger: 0.05 });
  useScrollReveal(sectionRef, '.t1, .t-sub', { stagger: 0.06, animation: 'fadeUp' });
  useScrollReveal(sectionRef, '.add-row', {
    stagger: 0.07,
    trigger: '.add-tbl',
    start: 'top 75%',
    animation: 'slideLeft',
  });
  useTextScramble(sectionRef);

  return (
    <section id="addons" className="sec" ref={sectionRef}>
      <div className="sec-hd">
        <span className="eye">Add-On Services</span>
        <h2 className="t1">
          Extend your website
          <br />
          anytime.
        </h2>
        <p className="t-sub">
          Available at any time, even after your website is live. Only pay for what you actually need.
        </p>
      </div>
      <div className="add-tbl">
        <div className="add-hd">
          <span>Service</span>
          <span>Price</span>
        </div>
        {ADDONS.map((a) => (
          <div className="add-row" key={a.name}>
            <div>
              <p className="an">{a.name}</p>
              <p className="ad">{a.desc}</p>
            </div>
            <div className="ap">
              {a.price}
              <span>{a.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
