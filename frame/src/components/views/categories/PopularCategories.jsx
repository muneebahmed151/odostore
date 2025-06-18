import React from 'react';
import CategoryCard from './CategoryCard';

const PopularCategories = () => {
  const popularCategories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://via.placeholder.com/400x300?text=Electronics',
      count: 128
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://via.placeholder.com/400x300?text=Fashion',
      count: 256
    },
    {
      id: 4,
      name: 'Beauty & Care',
      image: 'https://via.placeholder.com/400x300?text=Beauty+Care',
      count: 72
    }
  ];

  return (
    <div className="bg-blue-100 rounded-lg p-6 mb-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Most Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;