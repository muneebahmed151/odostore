import React from 'react';
import DealCard from './DealCard';

const deals = [
  {
    id: 1,
    name: 'Premium Headphones Bundle',
    originalPrice: 199.99,
    dealPrice: 129.99,
    discount: 35,
    rating: 4,
    image: 'https://via.placeholder.com/300',
    timeLeft: '12h 45m',
    sold: 85
  },
  {
    id: 2,
    name: 'Summer Wardrobe Pack',
    originalPrice: 149.99,
    dealPrice: 79.99,
    discount: 47,
    rating: 5,
    image: 'https://via.placeholder.com/300',
    timeLeft: '1d 6h',
    sold: 42
  },
  {
    id: 3,
    name: 'Smart Home Starter Kit',
    originalPrice: 299.99,
    dealPrice: 199.99,
    discount: 33,
    rating: 4,
    image: 'https://via.placeholder.com/300',
    timeLeft: '3d 2h',
    sold: 28
  },
  {
    id: 4,
    name: 'Fitness Tracker Pro',
    originalPrice: 129.99,
    dealPrice: 79.99,
    discount: 38,
    rating: 4,
    image: 'https://via.placeholder.com/300',
    timeLeft: '6h 15m',
    sold: 93
  },
  {
    id: 5,
    name: 'Kitchen Essentials Set',
    originalPrice: 89.99,
    dealPrice: 49.99,
    discount: 44,
    rating: 5,
    image: 'https://via.placeholder.com/300',
    timeLeft: '2d 8h',
    sold: 67
  },
  {
    id: 6,
    name: 'Wireless Earbuds',
    originalPrice: 79.99,
    dealPrice: 49.99,
    discount: 38,
    rating: 3,
    image: 'https://via.placeholder.com/300',
    timeLeft: '1d 4h',
    sold: 124
  },
];

const DealGrid = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-blue-900">All Deals</h2>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-blue-700">Sort by:</label>
          <select 
            id="sort" 
            className="border border-blue-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Ending Soonest</option>
            <option>Newest</option>
            <option>Discount % (High to Low)</option>
            <option>Discount % (Low to High)</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded-md text-blue-700 hover:bg-blue-100">2</button>
          <button className="px-3 py-1 rounded-md text-blue-700 hover:bg-blue-100">3</button>
          <button className="px-3 py-1 rounded-md text-blue-700 hover:bg-blue-100">Next</button>
        </nav>
      </div>
    </div>
  );
};

export default DealGrid;