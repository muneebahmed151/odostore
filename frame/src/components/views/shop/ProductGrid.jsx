import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    rating: 4,
    image: 'https://via.placeholder.com/300',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    rating: 5,
    image: 'https://via.placeholder.com/300',
    category: 'Clothing'
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4,
    image: 'https://via.placeholder.com/300',
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Ceramic Coffee Mug',
    price: 19.99,
    rating: 5,
    image: 'https://via.placeholder.com/300',
    category: 'Home'
  },
  {
    id: 5,
    name: 'Leather Wallet',
    price: 49.99,
    rating: 4,
    image: 'https://via.placeholder.com/300',
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 79.99,
    rating: 3,
    image: 'https://via.placeholder.com/300',
    category: 'Electronics'
  },
];

const ProductGrid = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-blue-900">All Products</h2>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-blue-700">Sort by:</label>
          <select 
            id="sort" 
            className="border border-blue-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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

export default ProductGrid;