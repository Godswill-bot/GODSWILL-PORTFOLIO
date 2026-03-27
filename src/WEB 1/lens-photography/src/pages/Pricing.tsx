import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Basic',
    price: 299,
    description: 'Perfect for personal photoshoots',
    features: [
      '2-hour photo session',
      '25 edited digital photos',
      '1 location',
      'Online gallery',
      'Print release',
      'Delivery within 2 weeks'
    ]
  },
  {
    id: 2,
    name: 'Professional',
    price: 599,
    description: 'Ideal for events and portraits',
    features: [
      '4-hour photo session',
      '75 edited digital photos',
      '2 locations',
      'Online gallery',
      'Print release',
      '10 printed photos (8x10)',
      'Delivery within 1 week',
      'Outfit change assistance'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Premium',
    price: 999,
    description: 'Complete coverage for special events',
    features: [
      'Full day coverage (8 hours)',
      '200+ edited digital photos',
      'Unlimited locations',
      'Online gallery',
      'Print release',
      '20 printed photos (8x10)',
      'Custom photo album',
      'Priority delivery (5 days)',
      'Second photographer',
      'Drone shots included'
    ]
  }
];

interface AddOn {
  name: string;
  price: number;
  description: string;
}

const addOns: AddOn[] = [
  { name: 'Extra Hour', price: 100, description: 'Add more time to your session' },
  { name: 'Rush Delivery', price: 150, description: 'Get your photos within 48 hours' },
  { name: 'Photo Album', price: 200, description: '20-page premium photo album' },
  { name: 'Second Photographer', price: 250, description: 'Additional coverage and angles' },
  { name: 'Drone Photography', price: 175, description: 'Stunning aerial shots' },
  { name: 'Video Highlights', price: 350, description: '3-5 minute highlight video' }
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero-content">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the perfect package for your photography needs</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards">
        <div className="pricing-container">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`plan-btn ${plan.popular ? 'popular-btn' : ''}`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section">
        <div className="addons-container">
          <div className="addons-header">
            <h2>Enhance Your Package</h2>
            <p>Add extra services to customize your experience</p>
          </div>
          <div className="addons-grid">
            {addOns.map((addon, index) => (
              <div key={index} className="addon-card">
                <div className="addon-info">
                  <h4>{addon.name}</h4>
                  <p>{addon.description}</p>
                </div>
                <div className="addon-price">+${addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I book a session?</h4>
              <p>Simply choose your preferred package and click "Book Now" or contact us directly through our contact page. We'll get back to you within 24 hours.</p>
            </div>
            <div className="faq-item">
              <h4>What's included in the editing process?</h4>
              <p>All photos receive professional color correction, exposure adjustments, and basic retouching. Advanced retouching is available upon request.</p>
            </div>
            <div className="faq-item">
              <h4>Can I request specific editing styles?</h4>
              <p>Absolutely! We're happy to discuss your preferred aesthetic and can match specific styles or presets you love.</p>
            </div>
            <div className="faq-item">
              <h4>What is your cancellation policy?</h4>
              <p>Cancellations made 48+ hours in advance receive a full refund. Cancellations within 48 hours may be subject to a 50% fee.</p>
            </div>
            <div className="faq-item">
              <h4>Do you travel for shoots?</h4>
              <p>Yes! Local shoots within 30 miles are included. Travel fees apply for distances beyond that. We also offer destination packages.</p>
            </div>
            <div className="faq-item">
              <h4>How are photos delivered?</h4>
              <p>Photos are delivered through a private online gallery where you can view, download, and share your images easily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="custom-quote">
        <div className="quote-content">
          <h2>Need a Custom Package?</h2>
          <p>
            Every project is unique. If our standard packages don't fit your needs, 
            we'd love to create a custom solution just for you.
          </p>
          <Link to="/contact" className="quote-btn">
            Request Custom Quote
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
