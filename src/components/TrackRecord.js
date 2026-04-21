import React from 'react';
import '../styles/TrackRecord.css';

const RESULTS = [
  { sector: 'Fashion',        stat: '30%', detail: 'Boost in conversions for a leading Fashion Brand.' },
  { sector: 'Luxury',         stat: '20%', detail: 'Increase in leads for a Luxury Brand.' },
  { sector: 'Consumer Goods', stat: '15%', detail: 'Growth in online sales for a renowned brand.' },
  { sector: 'Real Estate',    stat: '25%', detail: 'Reduction in cost per acquisition via optimized ad spend.' },
  { sector: 'E-Commerce',     stat: '40%', detail: 'Boost in online sales through targeted performance marketing campaigns.' },
  { sector: 'Food & Beverages', stat: '30%', detail: 'Reduction in customer acquisition costs through streamlined processes.' },
];

function TrackRecord() {
  return (
    <section id="track-record" className="track-record">

      <div className="track-record__header">
        <div className="section-chip section-chip--ghost">Results That Speak</div>
        <h2 className="section-title">
          Our <span>Track Record</span>
        </h2>
      </div>

      <div className="track-record__grid">
        {RESULTS.map(({ sector, stat, detail }) => (
          <div key={sector} className="track-record__card">
            <div className="track-record__stat">{stat}</div>
            <div className="track-record__sector">{sector}</div>
            <p className="track-record__detail">{detail}</p>
          </div>
        ))}
      </div>

      <div className="track-record__extra">
        <strong>Healthcare Provider:</strong> Led a successful digital transformation, enhancing
        patient engagement and satisfaction with measurable outcomes across all touchpoints.
      </div>

    </section>
  );
}

export default TrackRecord;
