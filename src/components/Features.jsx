import React from 'react';
import features from '../data/features.json';

const Features = () => (
  <section id="features" className="features">
    <div className="container">
      <h3>Program Features</h3>
      <div className="feature-grid">
        {features.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
