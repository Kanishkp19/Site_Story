import React from 'react';
import { TERMS } from '../data/content.js';

export default function Terms() {
  return (
    <section id="terms">
      <div style={{ maxWidth: 'var(--cw)', margin: '0 auto', padding: '0 16px' }}>
        <div className="terms-g">
          {TERMS.map((t) => (
            <div className="term-c" key={t.title}>
              <h3 className="term-ct">{t.title}</h3>
              <ul className="term-ul">
                {t.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
