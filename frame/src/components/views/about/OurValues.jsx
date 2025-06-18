import React from 'react';

const values = [
  {
    title: "Customer First",
    icon: "👥",
    description: "Your satisfaction guides every decision we make"
  },
  {
    title: "Quality Obsessed",
    icon: "✨", 
    description: "Rigorous standards for every product we offer"
  },
  {
    title: "Transparent Pricing",
    icon: "💎",
    description: "No hidden fees, just honest value"
  },
  {
    title: "Fast Delivery",
    icon: "🚚",
    description: "Reliable shipping with real-time tracking"
  },
  {
    title: "Easy Returns",
    icon: "🔄",
    description: "Hassle-free 30-day return policy"
  },
  {
    title: "Community Focus",
    icon: "🌍",
    description: "Giving back to the communities we serve"
  }
];

const OurValues = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Our Core Values</h2>
        <p className="mt-2 text-blue-700">The principles that guide everything we do</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
            <p className="text-blue-700">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;