import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {category.popular && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-bold">
            Popular
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-blue-900 mb-1">{category.name}</h3>
        <p className="text-blue-700 text-sm">{category.count} products</p>
        <button className="mt-3 w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 rounded-md transition duration-300 text-sm font-medium">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;