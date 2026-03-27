import React, { useState } from 'react';
import './Testimonial.css';

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: 'Anna Trevor',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.'
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
  }
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial">
      <div className="container">
        <h2 className="testimonial-title">
          Customer's <span className="highlight">Testimonial</span>
        </h2>
        <div className="testimonial-content">
          <button className="nav-btn prev" onClick={handlePrevious} aria-label="Previous testimonial">
            ←
          </button>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={current.image} alt={current.name} />
            </div>
            <h3 className="testimonial-name">{current.name}</h3>
            <span className="testimonial-role">{current.role}</span>
            <p className="testimonial-text">{current.text}</p>
          </div>
          <button className="nav-btn next" onClick={handleNext} aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
