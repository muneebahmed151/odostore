import React from 'react';
import DealCard from './DealCard';

const hotDeals = [
  {
    id: 101,
    name: 'Mega Electronics Bundle',
    originalPrice: 499.99,
    dealPrice: 299.99,
    discount: 40,
    rating: 5,
    image: 'https://via.placeholder.com/300',
    timeLeft: '4h 30m',
    sold: 92
  },
  {
    id: 102,
    name: 'Designer Handbag Collection',
    originalPrice: 399.99,
    dealPrice: 199.99,
    discount: 50,
    rating: 4,
    image: 'https://via.placeholder.com/300',
    timeLeft: '8h 15m',
    sold: 78
  },
];

const HotDeals = () => {
  return (
    <div className="bg-blue-100 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">🔥 Today's Hot Deals</h2>
        <div className="flex items-center space-x-2">
          <span className="text-red-600 animate-pulse">FLASH SALE</span>
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            Ending Soon
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hotDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default HotDeals;