import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>VENDEX</h1>
            <span className="logo-tagline">Everyday For You</span>
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={isActive('/')}>HOME</Link></li>
            <li><Link to="/products" className={isActive('/products')}>PRODUCTS</Link></li>
            <li><Link to="/blog" className={isActive('/blog')}>BLOG</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>CONTACT</Link></li>
          </ul>
        </nav>

        <div className={`auth-buttons ${isMenuOpen ? 'auth-open' : ''}`}>
          {user ? (
            <div className="user-menu">
              <span className="user-greeting">Hi, {user.name}</span>
              <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-login">LogIn</Link>
              <Link to="/register" className="btn btn-register">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
