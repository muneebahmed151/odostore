import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-blue-100 h-48 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-blue-900">{product.name}</h3>
          <span className="font-bold text-blue-800">${product.price.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex items-center">
          <div className="flex">
            {Array(5).fill().map((_, i) => (
              <span 
                key={i} 
                className={`${i < product.rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-blue-700 ml-1">({product.rating})</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;