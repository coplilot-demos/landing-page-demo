import React from 'react';
import features from '../data/features.json';

const Features = () => (
  <section id="features" style={{padding: '2rem 1rem', background: '#f9f9f9'}}>
    <h2>Program Features</h2>
    <ul style={{listStyle: 'none', padding: 0}}>
      {features.map((feature, idx) => (
        <li key={idx} style={{marginBottom: '1.5rem', background: '#fff', borderRadius: '6px', boxShadow: '0 2px 8px #eee', padding: '1rem'}}>
          <h3 style={{marginBottom: '0.5rem'}}>{feature.title}</h3>
          <p>{feature.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Features;
