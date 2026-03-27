import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <button className="back-arrow" onClick={() => navigate(-1)} aria-label="Go back">
        ← Back
      </button>
      <div className="checkout-hero">
        <div className="container">
          <h1>Checkout</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>Checkout</span>
          </div>
        </div>
      </div>

      <div className="container checkout-content">
        <div className="checkout-empty">
          <div className="empty-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="btn-continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
