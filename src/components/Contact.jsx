import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{padding: '2rem 1rem', maxWidth: '500px', margin: '0 auto'}}>
      <h2>Contact / Join</h2>
      {submitted ? (
        <p style={{color: 'green'}}>Thank you for your interest! We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{padding: '0.5rem'}} />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{padding: '0.5rem'}} />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{padding: '0.5rem'}} />
          <button type="submit" style={{padding: '0.75rem', background: '#222', color: '#fff', border: 'none', borderRadius: '4px'}}>Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
