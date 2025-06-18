import React from 'react';

const testimonials = [
  {
    quote: "ODO has completely transformed how I shop online. The quality is consistently excellent!",
    author: "Jessica T.",
    role: "Loyal Customer"
  },
  {
    quote: "Their customer service team resolved my issue within minutes. Truly impressive!",
    author: "David M.",
    role: "Business Owner" 
  },
  {
    quote: "I recommend ODO to all my friends. The best e-commerce experience I've had.",
    author: "Sophia K.",
    role: "Frequent Shopper"
  }
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">What Our Customers Say</h2>
        <p className="mt-2 text-blue-700">Don't just take our word for it</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <blockquote className="text-blue-800 italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-blue-900 font-medium">{testimonial.author}</div>
            <div className="text-blue-600 text-sm">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;