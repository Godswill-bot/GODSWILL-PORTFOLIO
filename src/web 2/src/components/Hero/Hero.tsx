import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-title">
            <span className="sale-text">Sale 20% Off</span>
            <span className="everything-text">On Everything</span>
          </h2>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            esque magnam fugiat hic? Esse dicta aliquot error repudiandae
            earum suscipit fugiat molestias, velit vel architecto variatas
            delectus repetat, quas imo.
          </p>
          <Link to="/products" className="btn-shop-now">Shop Now</Link>
          <div className="hero-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=700&fit=crop" 
            alt="Woman shopping with bags"
          />
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
