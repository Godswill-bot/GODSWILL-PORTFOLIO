import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">📷</span>
              <span className="logo-text">LENS</span>
            </Link>
            <p className="footer-description">
              simply dummy text of the printing and typesetting industry. Lorem Ipsum 
              has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to.
            </p>
          </div>
          
          <div className="footer-center">
            <div className="rotating-badge">
              <svg viewBox="0 0 100 100" className="rotating-text-svg">
                <defs>
                  <path id="footer-circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/>
                </defs>
                <text fontSize="8">
                  <textPath href="#footer-circle">• PLAY VIDEO • PLAY VIDEO • PLAY VIDEO </textPath>
                </text>
              </svg>
              <div className="badge-center">▶</div>
            </div>
          </div>
          
          <div className="footer-contact">
            <div className="social-links">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube" aria-label="YouTube">▶</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">📷</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">in</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter" aria-label="Twitter">𝕏</a>
            </div>
            <div className="contact-info">
              <a href="https://www.qualityx.com" target="_blank" rel="noopener noreferrer" className="website">Www.qualityx.com</a>
              <span className="phone">3948 45484 4454</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/contact" className="footer-link">FAQ</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Privacy Policy</Link>
            <Link to="/contact" className="footer-link">Terms Of Service</Link>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} LENS Photography. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
