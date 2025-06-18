import React from 'react';

const brands = [
  '/images/nike.png',
  '/images/adidas.png',
  '/images/puma.png',
  '/images/zara.png',
  '/images/hm.png',
  '/images/gucci.png',
];

const BrandMarquee = () => {
  return (
    <section className="py-6 bg-white overflow-hidden">
      <div className="whitespace-nowrap animate-marquee flex items-center gap-12 px-4">
        {brands.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index}`} className="h-16 w-auto inline-block" />
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;