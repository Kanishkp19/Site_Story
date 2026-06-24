import React from 'react';
import { BRAND, NAV_LINKS } from '../data/content.js';

export default function Footer() {
  return (
    <footer>
      <div className="ft-i">
        <div>
          <div className="ft-brand" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/logo.jpeg"
              alt="Site_Story Logo"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                objectFit: 'cover',
                border: '1px solid var(--hair)'
              }}
            />
            <span>{BRAND.name}</span>
          </div>
          <div className="ft-brand-s">{BRAND.tagline}</div>
        </div>
        <nav className="ft-lnks">
          {NAV_LINKS.map((l) => (
            <a href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ft-ct">
          {BRAND.contacts.map((c) => (
            <a href={`https://wa.me/${c.phone}`} key={c.phone}>
              💬 {c.name}: +91 {c.display}
            </a>
          ))}
          <a href={`mailto:${BRAND.email}`}>✉ {BRAND.email}</a>
        </div>
      </div>
      <div className="ft-bot">
        <p className="ft-copy">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p className="ft-copy">UPI · Google Pay · PhonePe · Bank Transfer · Quote valid 7 days</p>
      </div>
    </footer>
  );
}
