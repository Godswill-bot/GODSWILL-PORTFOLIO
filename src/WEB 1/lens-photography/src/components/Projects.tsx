import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-left">
          <div className="projects-header">
            <h2 className="projects-title">Projects</h2>
            <button className="projects-btn">
              <span>+</span>
            </button>
          </div>
          <div className="projects-info">
            <p className="projects-text">
              STAY TUNED FOR NEWS<br />
              AND NEW WORK ON<br />
              INSTAGRAM
            </p>
            <div className="instagram-link">
              <span className="instagram-icon">📷</span>
            </div>
          </div>
        </div>
        <div className="projects-right">
          <div className="project-image">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=500&fit=crop" 
              alt="Wedding Photography" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
