import React from 'react';

const DealsHero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Hot Deals & Discounts</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Limited time offers on our best-selling products. Don't miss out!
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <span className="bg-blue-500 px-4 py-2 rounded-md">Ending Soon</span>
          <span className="bg-blue-500 px-4 py-2 rounded-md">New Deals</span>
          <span className="bg-blue-500 px-4 py-2 rounded-md">Best Sellers</span>
        </div>
      </div>
    </div>
  );
};

export default DealsHero;