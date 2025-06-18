import React from 'react';

const ShopPromo = () => {
  return (
    <div className="bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Special Offers</h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-8">
            Sign up now and get 15% off your first order!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPromo;