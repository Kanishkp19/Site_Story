import React, { useEffect, useRef, useState } from 'react';
import { BRAND, NAV_LINKS } from '../data/content.js';
import MagneticButton from './MagneticButton.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('sc', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <div className="nav-i">
        <a href="#" className="nav-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/logo.jpeg"
            alt="Site_Story Logo"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              objectFit: 'cover',
              border: '1px solid var(--hair)'
            }}
          />
          <span>
            {BRAND.name}
            <span style={{ color: 'var(--muted)' }}>.</span>
          </span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-r">
          <a href="#packages" className="btn btn-s">
            Pricing
          </a>
          <MagneticButton href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" className="btn-p">
            <WhatsAppIcon size={14} /> WhatsApp Me
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`nav-menu-mob ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links-mob">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '12px', width: '100%' }}>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-p"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon size={14} /> WhatsApp Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
