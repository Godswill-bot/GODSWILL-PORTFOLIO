import React, { useState } from 'react';
import './Works.css';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sarah & Michael\'s Wedding',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    description: 'A beautiful summer wedding at the countryside estate'
  },
  {
    id: 2,
    title: 'Urban Fashion Editorial',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
    description: 'Street style fashion shoot in downtown Manhattan'
  },
  {
    id: 3,
    title: 'Modern Architecture',
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
    description: 'Contemporary building design photography'
  },
  {
    id: 4,
    title: 'Beach Wedding Ceremony',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
    description: 'Romantic sunset beach wedding in Malibu'
  },
  {
    id: 5,
    title: 'High Fashion Campaign',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    description: 'Luxury brand campaign shoot'
  },
  {
    id: 6,
    title: 'Corporate Headshots',
    category: 'portrait',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    description: 'Professional corporate photography'
  },
  {
    id: 7,
    title: 'Skyline at Dusk',
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    description: 'City skyline architectural photography'
  },
  {
    id: 8,
    title: 'Winter Wedding Magic',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=400&fit=crop',
    description: 'Snowy winter wonderland wedding'
  },
  {
    id: 9,
    title: 'Lifestyle Portrait',
    category: 'portrait',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
    description: 'Natural light lifestyle portrait session'
  },
  {
    id: 10,
    title: 'Runway Collection',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    description: 'Fashion week runway photography'
  },
  {
    id: 11,
    title: 'Interior Design',
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    description: 'Luxury interior architecture shoot'
  },
  {
    id: 12,
    title: 'Family Portrait',
    category: 'portrait',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
    description: 'Warm family portrait session'
  }
];

const categories = ['all', 'wedding', 'fashion', 'architecture', 'portrait'];

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="works-page">
      {/* Hero Section */}
      <section className="works-hero">
        <div className="works-hero-content">
          <h1>My Works</h1>
          <p>Explore our portfolio of stunning photography</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="works-filter">
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="works-gallery">
        <div className="gallery-container">
          <div className="gallery-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="gallery-item"
                onClick={() => openLightbox(project)}
              >
                <img src={project.image} alt={project.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <span className="gallery-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="view-btn">View Project →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="lightbox-info">
              <span className="lightbox-category">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="works-cta">
        <div className="cta-container">
          <h2>Like What You See?</h2>
          <p>Let's create something amazing together for your next project</p>
          <a href="/contact" className="cta-btn">Start Your Project →</a>
        </div>
      </section>
    </div>
  );
};

export default Works;
