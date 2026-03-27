import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <span className="logo-icon">📷</span>
          <span className="logo-text">LENS</span>
        </Link>
        
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link 
                to="/works" 
                className={`nav-link ${isActive('/works') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                My Works
              </Link>
            </li>
            <li>
              <Link 
                to="/pricing" 
                className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        
        <Link to="/contact" className="contact-btn" onClick={closeMobileMenu}>
          Contact
        </Link>
        
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default Header;
