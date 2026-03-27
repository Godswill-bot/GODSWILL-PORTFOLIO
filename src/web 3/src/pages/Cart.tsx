import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

const cartItems: CartItem[] = [
  { id: 1, name: 'Pink Blazer Set', price: 129.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&h=120&fit=crop', quantity: 1, size: 'M' },
  { id: 2, name: 'Casual Hoodie', price: 59.99, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=100&h=120&fit=crop', quantity: 2, size: 'S' },
];

const Cart: React.FC = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  return (
    <div className="page-container cart-page">
      <div className="page-header">
        <Link to="/" className="back-btn">← Continue Shopping</Link>
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} items in your cart</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-size">Size: {item.size}</p>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-quantity">
                <button className="qty-btn">-</button>
                <span>{item.quantity}</span>
                <button className="qty-btn">+</button>
              </div>
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button className="remove-btn">×</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Promo code" />
            <button>Apply</button>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">🏦</span>
              <span className="payment-icon">📱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
