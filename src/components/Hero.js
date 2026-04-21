import React from 'react';
import '../styles/Hero.css';
import HeroImg from "../Images/Hero.webp";

const STATS = [
  { number: '13+', label: 'Years of Excellence' },
  { number: '100+', label: 'Brands Served' },
  { number: '500+', label: 'Campaigns Delivered' },
];

const dynamicBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

function Hero() {
  return (
    <section id="hero" className="hero" style={dynamicBackground}>

      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--orange" />
      <div className="hero__blob hero__blob--red" />

      <div className="hero__accent-bar" />

      <div className="hero__badge">
        <span>Since 2011 · Digital Transformation Fleet</span>
      </div>

      <h1 className="hero__title">
        <span className="hero__title--orange">Marque</span> Brands
      </h1>

      <p className="hero__subtitle">A Digital Transformation Fleet</p>

      <p className="hero__desc">
        We are passionate about driving results through performance marketing.
        As a leading digital marketing agency, we specialize in creating
        data-driven strategies that maximize ROI for large-scale organizations.
      </p>

      <div className="hero__buttons">
        <a href="#about" className="btn-primary">Explore Our Work</a>
        <a href="#contact" className="btn-outline">Contact Us</a>
      </div>

      <div className="hero__stats">
        {STATS.map(({ number, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div className="hero__stat-number">{number}</div>
            <div className="hero__stat-label">{label}</div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Hero;
