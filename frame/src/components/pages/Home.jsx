import React from 'react';
import HomeHero from '../views/home/HomeHero';
import CategorySection from '../views/home/CategorySection';
import AboutSection from '../views/home/AboutSection';
import BrandMarquee from '../views/home/BrandMarquee';

const Home = () => {
  return (
    <div className="text-blue-500 bg-blue-50">
      <HomeHero />
      <CategorySection />
      <AboutSection />
      <BrandMarquee />
    </div>
  );
};

export default Home;