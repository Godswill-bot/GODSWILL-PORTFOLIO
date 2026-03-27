import React from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum.',
    author: 'Maria Jeremy',
    role: 'Doctor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face'
  },
  {
    id: 2,
    text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum.',
    author: 'Jemmy Calter',
    role: 'Founder & Co Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Let's See What<br />People Say
          </h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
