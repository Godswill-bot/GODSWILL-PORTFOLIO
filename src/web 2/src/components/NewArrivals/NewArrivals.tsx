import React from 'react';
import { Link } from 'react-router-dom';
import './NewArrivals.css';

const NewArrivals: React.FC = () => {
  return (
    <section className="new-arrivals">
      <div className="container new-arrivals-container">
        <div className="arrivals-image">
          <img 
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop" 
            alt="New arrivals fashion"
          />
        </div>
        <div className="arrivals-content">
          <h2 className="arrivals-title">#NewArrivals</h2>
          <p className="arrivals-description">
            Vide fugiat, laboriosam officia pariendis provident aliquid
            voluptatibus dolorem, fugit ullam et earum id earue nisi hic?
            Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex
            unde!
          </p>
          <Link to="/products" className="btn-shop-now">Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
