// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('📩 Message Sent:', formData);

    // You can later integrate with Formspree, EmailJS, etc.
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">📬 Get in Touch</h2>
      <p>Feel free to reach out! I'm always open to discuss new projects, ideas or collaborations.</p>

      <form
  className="contact-form"
  action="https://formspree.io/f/movwzqwa"  // <-- Replace with your real one
  method="POST"
>
    <input type="hidden" name="_captcha" value="false" />

  <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Write your message..."
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">🚀 Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
