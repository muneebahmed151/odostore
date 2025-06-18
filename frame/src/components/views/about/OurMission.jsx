import React from 'react';

const OurMission = () => {
  return (
    <section className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
        <div className="space-y-4 text-blue-800">
          <p>
            At ODO, we're committed to revolutionizing your shopping experience through 
            exceptional products, transparent pricing, and customer-first service.
          </p>
          <p>
            Founded in 2020, we started with a simple idea: e-commerce should be enjoyable, 
            reliable, and accessible to everyone. Today, we serve thousands of customers 
            worldwide while staying true to our core values.
          </p>
          <p>
            We carefully curate every product in our catalog to ensure quality and value, 
            so you can shop with confidence.
          </p>
        </div>
      </div>
      <div className="bg-blue-100 rounded-xl overflow-hidden h-96">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
          alt="Our team working together" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default OurMission;