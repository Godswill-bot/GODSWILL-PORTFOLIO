import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="hero-title-creativity">Creativity</span>
            </h1>
            <p className="hero-description">
              The key to every business isn't always about standing out 
              from the competition. Sometimes, simply being memorable 
              can yield significant results in terms of traffic and customer 
              patronage.
            </p>
            <button className="book-now-btn">
              <span>Book Now</span>
              <span className="arrow">→</span>
            </button>
          </div>
          
          <div className="hero-center">
            <div className="play-button-wrapper">
              <div className="rotating-text">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                  </defs>
                  <text fontSize="10">
                    <textPath href="#circle">• PLAY VIDEO • PLAY VIDEO </textPath>
                  </text>
                </svg>
              </div>
              <div className="play-icon">▶</div>
            </div>
            <div className="photographer-image">
              <img 
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=500&fit=crop" 
                alt="Photographer" 
              />
            </div>
          </div>
          
          <div className="hero-right">
            <h2 className="hero-title-together">together!</h2>
            <div className="service-tabs">
              <div className="service-tab">
                <span className="tab-number">01</span>
                <span className="tab-text">Alpha Graphile</span>
              </div>
              <div className="service-tab active">
                <span className="tab-number">02</span>
                <span className="tab-text">Lifestyle Photography</span>
              </div>
              <div className="service-tab">
                <span className="tab-number">03</span>
                <span className="tab-text">Image Restoration</span>
              </div>
            </div>
            <div className="scroll-down">
              <span>Scroll Down</span>
              <span className="scroll-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
