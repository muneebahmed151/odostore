import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://via.placeholder.com/400x300?text=Electronics',
    count: 128,
    popular: true
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://via.placeholder.com/400x300?text=Fashion',
    count: 256,
    popular: true
  },
  {
    id: 3,
    name: 'Home & Garden',
    image: 'https://via.placeholder.com/400x300?text=Home+Garden',
    count: 84,
    popular: false
  },
  {
    id: 4,
    name: 'Beauty & Care',
    image: 'https://via.placeholder.com/400x300?text=Beauty+Care',
    count: 72,
    popular: true
  },
  {
    id: 5,
    name: 'Sports & Outdoors',
    image: 'https://via.placeholder.com/400x300?text=Sports+Outdoors',
    count: 63,
    popular: false
  },
  {
    id: 6,
    name: 'Toys & Games',
    image: 'https://via.placeholder.com/400x300?text=Toys+Games',
    count: 91,
    popular: false
  },
  {
    id: 7,
    name: 'Books & Media',
    image: 'https://via.placeholder.com/400x300?text=Books+Media',
    count: 57,
    popular: false
  },
  {
    id: 8,
    name: 'Automotive',
    image: 'https://via.placeholder.com/400x300?text=Automotive',
    count: 42,
    popular: false
  },
];

const CategoryGrid = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">All Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;