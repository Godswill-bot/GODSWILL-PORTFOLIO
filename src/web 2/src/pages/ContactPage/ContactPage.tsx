import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Go back">
        ← Back
      </button>
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us!</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-info-cards">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Our Location</h3>
            <p>28 White Tower, Street Name</p>
            <p>New York City, USA</p>
          </div>
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone Number</h3>
            <p>+01 267 654 2210</p>
            <p>+01 267 654 2211</p>
          </div>
          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email Address</h3>
            <p>info@vendex.com</p>
            <p>support@vendex.com</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🕐</div>
            <h3>Working Hours</h3>
            <p>Mon - Fri: 9AM - 6PM</p>
            <p>Sat - Sun: 10AM - 4PM</p>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            
            {submitted && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows={6}
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>

          <div className="contact-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
