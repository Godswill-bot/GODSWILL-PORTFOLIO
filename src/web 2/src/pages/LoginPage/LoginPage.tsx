import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    
    // Simulate login (in a real app, this would be an API call)
    if (formData.email && formData.password) {
      // Store user info in localStorage for demo
      localStorage.setItem('user', JSON.stringify({ email: formData.email, name: formData.email.split('@')[0] }));
      navigate('/');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="auth-page">
      <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Go back">
        ← Back
      </button>
      <div className="auth-container">
        <div className="auth-image">
          <div className="auth-image-content">
            <h2>Welcome Back!</h2>
            <p>Login to access your account and continue shopping with exclusive deals.</p>
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
            
            <h2>Sign In</h2>
            <p className="auth-subtitle">Enter your credentials to access your account</p>

            {error && <div className="error-message">{error}</div>}

            <form className="auth-form" onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-link">Forgot Password?</a>
              </div>
              <button type="submit" className="btn-auth">Sign In</button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <div className="social-login">
              <button className="btn-social btn-google">
                <span>G</span> Continue with Google
              </button>
              <button className="btn-social btn-facebook">
                <span>f</span> Continue with Facebook
              </button>
            </div>

            <p className="auth-switch">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
