import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <Link to="/">
                <h2>VENDEX</h2>
                <span className="logo-tagline">Everyday For You</span>
              </Link>
            </div>
            <div className="contact-info">
              <p><strong>ADDRESS:</strong> 28 White tower, Street Name New York City, USA</p>
              <p><strong>TELEPHONE:</strong> +01 267 654 2210</p>
              <p><strong>EMAIL:</strong> <a href="mailto:yourmain@gmail.com">yourmain@gmail.com</a></p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">MENU</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">About</Link></li>
              <li><Link to="/products">Services</Link></li>
              <li><Link to="/contact">Testimonial</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">ACCOUNT</h3>
            <ul className="footer-links">
              <li><Link to="/login">Account</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/products">Shopping</Link></li>
              <li><Link to="/products">Widget</Link></li>
            </ul>
          </div>

          <div className="footer-section footer-newsletter">
            <h3 className="footer-title">NEWSLETTER</h3>
            <p className="newsletter-text">Subscribe to our newsletter and get update promo info.</p>
            {subscribed ? (
              <div className="subscribe-success">Thanks for subscribing!</div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter Your Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-subscribe">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2021 All Rights Reserved By <a href="#freehtml">Free Html Templates</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
