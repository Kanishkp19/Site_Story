import React, { useRef } from 'react';
import { BRAND, CTA_INFO } from '../data/content.js';
import MagneticButton from './MagneticButton.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import useScrollReveal from '../hooks/useScrollReveal.js';
import useTextScramble from '../hooks/useTextScramble.js';

export default function CTA() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.cta-card', { animation: 'scaleIn', duration: 1 });
  useTextScramble(sectionRef, '.eye');

  return (
    <section id="cta" ref={sectionRef}>
      <div className="cta-c">
        <div className="cta-card">
          <span className="eye" style={{ color: 'rgba(255,255,255,.4)', opacity: 1, transform: 'none' }}>
            Ready to Grow?
          </span>
          <h2 className="cta-t">
            Let's build your
            <br />
            business a home online.
          </h2>
          <p className="cta-s">
            Fast, professional, and built to convert. WhatsApp us right now — no forms, no sales calls, just a
            quick conversation.
          </p>
          <div className="cta-bts">
            {BRAND.contacts.map((c) => (
              <MagneticButton
                key={c.phone}
                href={`https://wa.me/${c.phone}`}
                target="_blank"
                className="btn-p"
                style={{ fontSize: 15, padding: '13px 26px' }}
              >
                <WhatsAppIcon /> {c.name}: {c.display}
              </MagneticButton>
            ))}
            <MagneticButton
              href={`mailto:${BRAND.email}`}
              className="btn-g"
              style={{ fontSize: 15, padding: '13px 26px' }}
            >
              ✉ {BRAND.email}
            </MagneticButton>
          </div>
          <div className="cta-inf">
            {CTA_INFO.map((info) => (
              <span key={info}>{info}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
