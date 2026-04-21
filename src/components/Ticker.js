import React from 'react';
import '../styles/Ticker.css';

const ITEMS = [
  'Performance Marketing', 'SEO', 'SMO', 'Content Optimization',
  'Data Analytics', 'Digital Transformation', 'UX/UI Design',
  'E-commerce Optimization', 'Lead Generation', 'PPC',
  'Celebrity Management', 'Film Collaborations', 'A/B Testing',
  'Funnel Optimization', 'Audience Targeting',
];

function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
