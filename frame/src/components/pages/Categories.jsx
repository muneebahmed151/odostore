import React from 'react';
import CategoriesHero from '../views/categories/CategoriesHero';
import CategoryGrid from '../views/categories/CategoryGrid';
import PopularCategories from '../views/categories/PopularCategories';
import CategoryPromo from '../views/categories/CategoryPromo';

const Categories = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <CategoriesHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PopularCategories />
        <CategoryGrid />
      </div>
      <CategoryPromo />
    </div>
  );
};

export default Categories;