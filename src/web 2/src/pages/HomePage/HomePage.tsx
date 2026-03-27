import React from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Products from '../../components/Products/Products';
import Review from '../../components/Review/Review';
import Testimonial from '../../components/Testimonial/Testimonial';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <Products />
      <Review />
      <Testimonial />
    </>
  );
};

export default HomePage;
