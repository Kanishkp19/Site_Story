import React, { useRef } from 'react';
import { PACKAGES, PAYMENT_STEPS, BRAND } from '../data/content.js';
import useScrollReveal from '../hooks/useScrollReveal.js';
import useTextScramble from '../hooks/useTextScramble.js';

export default function Pricing() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.eye', { stagger: 0.05 });
  useScrollReveal(sectionRef, '.t1, .t-sub', { stagger: 0.06, animation: 'fadeUp' });
  useScrollReveal(sectionRef, '.pk', {
    stagger: 0.13,
    trigger: '.pkg-g',
    animation: 'scaleIn',
    duration: 0.9,
  });
  useScrollReveal(sectionRef, '.pay-c', {
    stagger: 0.1,
    trigger: '.pay-strip',
    animation: 'fadeUp',
    start: 'top 85%',
  });
  useTextScramble(sectionRef);

  return (
    <section id="packages" className="sec" style={{ paddingTop: 0 }} ref={sectionRef}>
      <div className="sec-hd">
        <span className="eye">Pricing</span>
        <h2 className="t1">
          Simple, transparent
          <br />
          investment.
        </h2>
        <p className="t-sub">
          One-time payment. No hidden charges. No surprises. Your website is your asset — forever.
        </p>
      </div>
      <div className="pkg-g">
        {PACKAGES.map((pkg) => (
          <div className={`pk ${pkg.featured ? 'ft2' : ''}`} key={pkg.name}>
            {pkg.badge && <div className="pk-bad">{pkg.badge}</div>}
            <p className="pk-n">{pkg.name}</p>
            <div className="pk-p">{pkg.price}</div>
            <p className="pk-pn">{pkg.period}</p>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`pk-cta ${pkg.featured ? 'pp' : 'ps'}`}
            >
              Get Started →
            </a>
            <div className="pk-div"></div>
            <ul className="pk-ul">
              {pkg.features.map((f, i) => (
                <li key={i}>
                  <span className="ck">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="pk-del">{pkg.note}</div>
          </div>
        ))}
      </div>

      <div className="pay-strip">
        {PAYMENT_STEPS.map((s) => (
          <div className="pay-c" key={s.step} style={{ opacity: 0, transform: 'translateY(16px)' }}>
            <p className="pay-step">{s.step}</p>
            <p className="pay-t">{s.title}</p>
            <p className="pay-d">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
