import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agreeTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    // Simulate registration
    localStorage.setItem('user', JSON.stringify({ email: formData.email, name: formData.fullName }));
    navigate('/');
  };

  return (
    <div className="auth-page register-page">
      <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Go back">
        ← Back
      </button>
      <div className="auth-container">
        <div className="auth-image">
          <div className="auth-image-content">
            <h2>Join Vendex!</h2>
            <p>Create an account and unlock exclusive deals, track orders, and enjoy a personalized shopping experience.</p>
          </div>
        </div>
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <div className="auth-logo">
              <Link to="/">
                <h1>VENDEX</h1>
                <span>Everyday For You</span>
              </Link>
            </div>
            
            <h2>Create Account</h2>
            <p className="auth-subtitle">Fill in your details to get started</p>

            {error && <div className="error-message">{error}</div>}

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  minLength={6}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span>I agree to the <a href="#terms">Terms & Conditions</a></span>
                </label>
              </div>
              <button type="submit" className="btn-auth">Create Account</button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <div className="social-login">
              <button className="btn-social btn-google">
                <span>G</span> Sign up with Google
              </button>
              <button className="btn-social btn-facebook">
                <span>f</span> Sign up with Facebook
              </button>
            </div>

            <p className="auth-switch">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
