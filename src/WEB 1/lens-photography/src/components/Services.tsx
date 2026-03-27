import React from 'react';
import './Services.css';

interface Service {
  id: number;
  title: string;
  category: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Wedding Shoot',
    category: '[Wedding]',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    title: 'Fashion Shoo',
    category: '[Fashion,Model]',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    title: 'Build Shoot',
    category: '[Architecture]',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=500&fit=crop'
  }
];

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Services we're Providing</h2>
          <p className="services-description">
            professional photographers, Divi is the tool you should consider if you are
            ready to take your project to new heights. With practicality.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <span className="service-category">{service.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
