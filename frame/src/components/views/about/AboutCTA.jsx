import React from 'react';

const AboutCTA = () => {
  return (
    <div className="bg-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience ODO?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join our community of satisfied customers today
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/shop" 
            className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-md font-medium transition duration-300"
          >
            Shop Now
          </a>
          <a 
            href="/contact" 
            className="bg-transparent border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;