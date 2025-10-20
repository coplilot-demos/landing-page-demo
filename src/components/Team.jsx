import React from 'react';
import team from '../data/team.json';

const Team = () => (
  <section id="team" style={{padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto'}}>
    <h2>Meet the Team</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
      {team.map((member, idx) => (
        <div key={idx} style={{background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #eee', padding: '1rem', width: '220px', textAlign: 'center'}}>
          <img src={member.image} alt={member.name} style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '0.5rem'}} />
          <h3>{member.name}</h3>
          <p style={{fontWeight: 'bold', margin: '0.5rem 0'}}>{member.role}</p>
          <p style={{fontSize: '0.95rem'}}>{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
