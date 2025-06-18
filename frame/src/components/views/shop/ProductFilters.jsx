import React, { useState } from 'react';

const ProductFilters = ({ onFilterChange }) => {
  // State for all filter values
  const [filters, setFilters] = useState({
    category: 'All Products',
    priceRange: 1000,
    ratings: []
  });

  // Handle category change
  const handleCategoryChange = (category) => {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    const price = parseInt(e.target.value);
    const newFilters = { ...filters, priceRange: price };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Handle rating toggle
  const handleRatingToggle = (rating) => {
    let newRatings;
    if (filters.ratings.includes(rating)) {
      newRatings = filters.ratings.filter(r => r !== rating);
    } else {
      newRatings = [...filters.ratings, rating];
    }
    
    const newFilters = { ...filters, ratings: newRatings };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-900 mb-6">Filters</h2>
      
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-medium text-blue-800 mb-3">Categories</h3>
          <ul className="space-y-2">
            {['Computer', 'Electronics', 'Clothing', 'Smart Home', 'Accessories'].map((category) => (
              <li key={category}>
                <button 
                  className={`${filters.category === category ? 'text-blue-900 font-medium underline' : 'text-blue-700'} hover:text-blue-900 hover:underline`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Price Range */}
        <div>
          <h3 className="font-medium text-blue-800 mb-3">Price Range</h3>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={filters.priceRange}
            onChange={handlePriceChange}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-sm text-blue-700 mt-2">
            <span>$0</span>
            <span>${filters.priceRange}</span>
          </div>
        </div>
        
        {/* Ratings */}
        <div>
          <h3 className="font-medium text-blue-800 mb-3">Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={`rating-${rating}`}
                  checked={filters.ratings.includes(rating)}
                  onChange={() => handleRatingToggle(rating)}
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`rating-${rating}`} className="ml-2 text-blue-700">
                  {Array(rating).fill().map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;