import React from 'react';
import AboutHero from '../views/about/AboutHero';
import OurMission from '../views/about/OurMission';
import OurTeam from '../views/about/OurTeam';
import OurValues from '../views/about/OurValues';
import Testimonials from '../views/about/Testimonials';
import AboutCTA from '../views/about/AboutCTA';

const AboutUs = () => {
  return (
    <div className="bg-blue-50">
      <AboutHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <OurMission />
        <OurValues />
        <OurTeam />
        <Testimonials />
      </div>
      <AboutCTA />
    </div>
  );
};

export default AboutUs;