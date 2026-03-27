import React, { useState } from 'react';
import './Review.css';

const Review: React.FC = () => {
  const [review, setReview] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.trim()) {
      alert('Thank you for your review!');
      setReview('');
    }
  };

  return (
    <section className="review">
      <div className="container">
        <h2 className="review-title">Drop Yours Review Here</h2>
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="review-input"
            placeholder="Enter Your Thoughts"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button type="submit" className="btn-post">POST</button>
        </form>
      </div>
    </section>
  );
};

export default Review;
