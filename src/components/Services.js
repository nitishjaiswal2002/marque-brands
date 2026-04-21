import React from 'react';
import '../styles/Services.css';

const SERVICES = [
  {
    icon: '📡',
    title: 'Performance Media',
    desc: 'From end-to-end digital media planning to optimizing e-commerce presence, we cover it all.',
  },
  {
    icon: '✍️',
    title: 'Content Optimization',
    desc: 'Our SEO, content, and design experts work together to enhance user experience and drive conversions.',
  },
  {
    icon: '📈',
    title: 'Data-Driven Insights',
    desc: 'We leverage analytics and data science to provide actionable recommendations for continuous improvement.',
  },
  {
    icon: '🛒',
    title: 'E-commerce Optimization',
    desc: 'Whether you\'re selling products or services, we fine-tune your e-commerce strategy for maximum impact.',
  },
  {
    icon: '🎨',
    title: 'UX/UI Design & Optimization',
    desc: 'We create seamless digital experiences that engage users and convert visitors into loyal customers.',
  },
  {
    icon: '🔄',
    title: 'Digital Transformation Consulting',
    desc: 'We assess your current processes, identify bottlenecks, and recommend transformative solutions.',
  },
  {
    icon: '📣',
    title: 'SMO & SEO',
    desc: 'Social Media Optimization and Search Engine Optimization to amplify your brand\'s digital presence.',
  },
  {
    icon: '🤝',
    title: 'Celebrity Management & Collabs',
    desc: 'Strategic celebrity management and film collaborations to elevate brand visibility and reach.',
  },
];

// cycle through 3 colour themes
const THEMES = ['orange', 'light', 'light', 'navy', 'light', 'orange', 'light', 'navy'];

function Services() {
  return (
    <section id="services" className="services">

      <div className="services__header">
        <div className="section-chip">What We Do</div>
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
      </div>

      <div className="services__grid">
        {SERVICES.map(({ icon, title, desc }, i) => (
          <div
            key={title}
            className={`services__card services__card--${THEMES[i]}`}
          >
            <div className="services__card-icon">{icon}</div>
            <h3 className="services__card-title">{title}</h3>
            <p className="services__card-desc">{desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;
