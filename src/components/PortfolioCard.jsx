import React from 'react';
import PortfolioMock from './PortfolioMock.jsx';
import useTilt from '../hooks/useTilt.js';

export default function PortfolioCard({ item }) {
  const tiltRef = useTilt();

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="pc"
      ref={tiltRef}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <div className="pm">
        <PortfolioMock item={item} />
      </div>
      <div className="po">
        <div className="po-name">{item.name}</div>
        <div className="po-type">{item.type}</div>
        <span className="po-btn">View Live Site</span>
      </div>
      <div className="pl">
        <div className="pt">{item.category}</div>
        <div className="pn">{item.name}</div>
      </div>
    </a>
  );
}
