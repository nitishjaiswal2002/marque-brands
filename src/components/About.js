import React from 'react';
import '../styles/About.css';

const CARDS = [
  {
    icon: '🎯',
    title: 'Mission',
    text: 'Empowering Your Success. Every brand has untapped potential waiting to be unlocked through customized solutions.',
  },
  {
    icon: '📊',
    title: 'Performance-Driven',
    text: 'We believe in measurable outcomes — increased sales, higher conversions, or improved brand visibility.',
  },
  {
    icon: '🔬',
    title: 'In-Depth Research',
    text: 'Before launching any campaign, we dive deep into your business, industry, and target market.',
  },
  {
    icon: '⚡',
    title: 'Cutting-Edge Tech',
    text: 'Machine learning and data analytics ensure your campaigns stay ahead of the curve and optimized for success.',
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* Left column */}
        <div className="about__text-col">
          <div className="section-chip">About Us</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            About<br /><span>Marque Brands</span>
          </h2>

          <p className="about__desc">
            At Marque Brands, we are passionate about driving results through
            performance marketing. As a leading digital marketing agency, we
            specialize in creating data-driven strategies that maximize ROI for
            large-scale organizations.
          </p>

          <p className="about__desc">
            Our mission is to help businesses achieve their goals by leveraging
            cutting-edge technology, innovative ideas, and strategic insights.
          </p>

          <div className="about__highlight">
            <p className="about__highlight-title">We Are:</p>
            <p className="about__highlight-text">
              Started in 2011, Marque Brands is a fleet empowering visible growth
              by transforming organisational processes Digitally.
            </p>
          </div>
        </div>

        {/* Right column — cards */}
        <div className="about__cards">
          {CARDS.map(({ icon, title, text }) => (
            <div key={title} className="about__card">
              <div className="about__card-icon">{icon}</div>
              <div className="about__card-title">{title}</div>
              <p className="about__card-text">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
