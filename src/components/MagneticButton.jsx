import React from 'react';
import useMagnetic from '../hooks/useMagnetic.js';

// Renders an <a> with the magnetic-pull hover effect applied.
export default function MagneticButton({ href, className = '', target, children, style }) {
  const ref = useMagnetic();
  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`btn mag ${className}`}
      style={style}
    >
      {children}
    </a>
  );
}
