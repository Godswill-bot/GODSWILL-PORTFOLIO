import React from 'react';
import './Features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '📦',
    title: 'Fast Delivery',
    description: 'variations of passages of Lorem Ipsum available'
  },
  {
    icon: '🆓',
    title: 'Free Shipping',
    description: 'variations of passages of Lorem Ipsum available'
  },
  {
    icon: '✨',
    title: 'Best Quality',
    description: 'variations of passages of Lorem Ipsum available'
  }
];

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Shop With Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
