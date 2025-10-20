import React from 'react';

const Footer = () => (
  <footer style={{padding: '1rem', background: '#222', color: '#fff', textAlign: 'center', marginTop: '2rem'}}>
    <p>&copy; {new Date().getFullYear()} Elmentor Program. All rights reserved.</p>
    <nav>
      <a href="#about" style={{color: '#fff', marginRight: '1rem'}}>About</a>
      <a href="#features" style={{color: '#fff', marginRight: '1rem'}}>Features</a>
      <a href="#team" style={{color: '#fff', marginRight: '1rem'}}>Team</a>
      <a href="#contact" style={{color: '#fff'}}>Contact</a>
    </nav>
  </footer>
);

export default Footer;
