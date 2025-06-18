import React from 'react';

const CategoryPromo = () => {
  return (
    <div className="bg-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Our product catalog is constantly growing. Sign up to be notified when we add new categories!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 flex-grow"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 whitespace-nowrap">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPromo;