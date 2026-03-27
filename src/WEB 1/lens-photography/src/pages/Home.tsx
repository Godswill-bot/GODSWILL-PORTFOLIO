import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Story from '../components/Story';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Story />
      <Services />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Home;
