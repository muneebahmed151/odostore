import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative bg-blue-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About ODO</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Discover the story behind our passion for quality and customer satisfaction
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-50 transform skew-y-1 origin-top-left"></div>
    </div>
  );
};

export default AboutHero;