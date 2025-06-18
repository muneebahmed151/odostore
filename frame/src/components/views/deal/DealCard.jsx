import React from 'react';

const DealCard = ({ deal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
      {/* Discount Badge */}
      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
        {deal.discount}% OFF
      </div>
      
      <div className="bg-blue-100 h-48 flex items-center justify-center relative">
        <img 
          src={deal.image} 
          alt={deal.name} 
          className="h-full object-cover"
        />
        {/* Time Left */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-80 text-white p-2 text-center">
          Ends in: {deal.timeLeft}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-blue-900">{deal.name}</h3>
          <div className="text-right">
            <span className="text-sm line-through text-gray-500">${deal.originalPrice.toFixed(2)}</span>
            <span className="block font-bold text-blue-800">${deal.dealPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex">
              {Array(5).fill().map((_, i) => (
                <span 
                  key={i} 
                  className={`${i < deal.rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-blue-700 ml-1">({deal.rating})</span>
          </div>
          <span className="text-xs text-blue-700">{deal.sold} sold</span>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${Math.min(deal.sold, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-blue-700 mt-1">Almost gone!</p>
        </div>
        
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300">
          Grab Deal
        </button>
      </div>
    </div>
  );
};

export default DealCard;