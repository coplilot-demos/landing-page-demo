import React from 'react';

const Header = () => (
  <header style={{padding: '1rem', background: '#222', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Elmentor Program</div>
    <nav>
      <a href="#about" style={{color: '#fff', marginRight: '1rem'}}>About</a>
      <a href="#features" style={{color: '#fff', marginRight: '1rem'}}>Features</a>
      <a href="#team" style={{color: '#fff', marginRight: '1rem'}}>Team</a>
      <a href="#contact" style={{color: '#fff'}}>Contact</a>
    </nav>
  </header>
);

export default Header;
