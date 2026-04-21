import React from 'react';
import '../styles/RevenueModel.css';

const MODELS = [
  {
    number: '01',
    title: 'Business Partnership',
    desc: 'Long-term strategic partnerships for sustained growth and mutual success.',
  },
  {
    number: '02',
    title: 'Agency Fee',
    desc: 'Transparent, performance-linked agency fees tied to real, measurable outcomes.',
  },
  {
    number: '03',
    title: 'Commission',
    desc: 'Results-driven commission model — we grow when you grow.',
  },
];

function RevenueModel() {
  return (
    <section id="revenue" className="revenue">
      <div className="revenue__inner">

        {/* Left */}
        <div>
          <div className="section-chip">How We Work</div>
          <h2 className="section-title">
            Revenue <span>Model</span>
          </h2>
          <p className="revenue__left-desc">
            We offer flexible engagement models designed to align our success with
            yours — ensuring maximum value at every stage of the partnership.
          </p>
        </div>

        {/* Right — cards */}
        <div className="revenue__cards">
          {MODELS.map(({ number, title, desc }) => (
            <div key={number} className="revenue__card">
              <div className="revenue__card-number">{number}</div>
              <div>
                <div className="revenue__card-title">{title}</div>
                <p className="revenue__card-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RevenueModel;
