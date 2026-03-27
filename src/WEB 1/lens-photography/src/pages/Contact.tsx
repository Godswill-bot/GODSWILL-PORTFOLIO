import React, { useState } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Let's discuss your next photography project</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <p className="contact-intro">
              Ready to capture your special moments? Reach out to us and let's create something beautiful together.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>123 Photography Lane<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>hello@lensphotography.com<br />bookings@lensphotography.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-text">
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram">📷</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook">f</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">𝕏</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">in</a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="fashion">Fashion Shoot</option>
                      <option value="architecture">Architecture Photography</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="event">Event Coverage</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, preferred dates, and any specific requirements..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <h3>Visit Our Studio</h3>
            <p>123 Photography Lane, New York, NY 10001</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
