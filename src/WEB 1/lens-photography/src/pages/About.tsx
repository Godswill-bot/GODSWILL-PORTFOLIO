import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Founder & Lead Photographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'With over 15 years of experience, Alex has captured moments for thousands of clients worldwide.'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Wedding Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Sarah brings emotion and elegance to every wedding she photographs.'
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Fashion Photographer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'James has worked with top fashion brands and magazines across the globe.'
  },
  {
    id: 4,
    name: 'Emily Chen',
    role: 'Post-Production Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Emily ensures every photo tells its story through expert editing and color grading.'
  }
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '2500+', label: 'Projects Completed' },
  { number: '98%', label: 'Happy Clients' },
  { number: '50+', label: 'Awards Won' }
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p>Capturing life's beautiful moments since 2010</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=700&fit=crop" 
              alt="Our Studio"
            />
            <div className="experience-badge">
              <span className="years">15</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
          <div className="story-content">
            <span className="section-label">About LENS</span>
            <h2>We Believe Every Photo Should Tell a Story</h2>
            <p>
              Founded in 2010, LENS Photography has grown from a small studio into one of the most 
              sought-after photography agencies in the region. Our journey began with a simple 
              belief: every moment deserves to be captured beautifully.
            </p>
            <p>
              We specialize in wedding photography, fashion shoots, architectural photography, 
              and corporate events. Our team of passionate photographers brings creativity, 
              technical expertise, and an eye for detail to every project.
            </p>
            <p>
              What sets us apart is our commitment to understanding your vision. We don't just 
              take photos; we create visual stories that you'll treasure for a lifetime.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Professional Equipment</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Creative Vision</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Quick Delivery</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Unlimited Revisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <span className="section-label">Our Team</span>
            <h2>Meet the Creative Minds</h2>
            <p>
              Our talented team brings diverse expertise and a shared passion for photography
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <span className="section-label">Our Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every shot, ensuring the highest quality in our work.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Creativity</h3>
              <p>We bring fresh perspectives and innovative ideas to every photography project.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and delivering on our promises.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>Photography isn't just our job – it's our passion and our way of seeing the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Work With Us?</h2>
          <p>Let's create something beautiful together</p>
          <Link to="/contact" className="cta-button">
            Get In Touch
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
