import React from 'react';
import './CTA.css';

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">
          Capture Your Beautiful Photo<br />With Me
        </h2>
        <p className="cta-description">
          professional photographers, Divi is the tool you should consider if you are ready to take your
          project to new heights. With practicality.
        </p>
        <button className="cta-btn">START NEW PROJECT</button>
      </div>
    </section>
  );
};

export default CTA;
