import React from 'react';
import '../styles/Technologies.css';

const TECHS = [
  'ROI (Return on Investment)', 'Conversion Rate Optimization', 'PPC (Pay-Per-Click)',
  'SEM (Search Engine Marketing)', 'Social Media Advertising', 'Data-Driven Strategies',
  'Audience Targeting', 'Lead Generation', 'A/B Testing', 'Funnel Optimization',
  'Digital Strategy', 'Process Automation', 'Customer Experience (CX)',
  'Agile Transformation', 'Cloud Migration', 'IoT (Internet of Things)',
  'Blockchain Integration', 'Change Management', 'User-Centric Design', 'Innovation Culture',
];

const THEMES = (i) => {
  if (i % 5 === 0) return 'orange';
  if (i % 7 === 0) return 'navy';
  return 'white';
};

function Technologies() {
  return (
    <section id="technologies" className="technologies">

      <div className="technologies__header">
        <div className="section-chip">Expertise</div>
        <h2 className="section-title">
          Technologies &amp; <span>Capabilities</span>
        </h2>
      </div>

      <div className="technologies__chips">
        {TECHS.map((tech, i) => (
          <span key={tech} className={`technologies__chip technologies__chip--${THEMES(i)}`}>
            {tech}
          </span>
        ))}
      </div>

    </section>
  );
}

export default Technologies;
