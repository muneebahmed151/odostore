import React from 'react';

const ShoppingCart = ({ cartItems = [], onUpdateQuantity, onRemoveItem }) => {
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
      <h3 className="text-xl font-semibold text-blue-900 mb-6">Your Shopping Cart</h3>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <i className="fas fa-shopping-cart text-4xl text-blue-300 mb-4"></i>
          <p className="text-blue-700">Your cart is empty</p>
          <a href="/shop" className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="divide-y divide-blue-100 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="py-4 flex flex-col sm:flex-row">
                <div className="flex-shrink-0 mb-3 sm:mb-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </div>
                <div className="sm:ml-4 flex-grow">
                  <div className="flex justify-between">
                    <h4 className="text-md font-medium text-blue-900">{item.name}</h4>
                    <span className="text-blue-900 font-medium">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-blue-700 mb-2">{item.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-blue-200 rounded-md">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-blue-600 hover:bg-blue-50"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-3 text-blue-900">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-blue-600 hover:bg-blue-50"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      <i className="fas fa-trash-alt mr-1"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t border-blue-200 pt-4">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">Order Summary</h4>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-blue-700">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="text-blue-900 font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700">Shipping</span>
                <span className="text-blue-900 font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700">Tax</span>
                <span className="text-blue-900 font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-blue-200 pt-4 mb-6">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-blue-900">Total</span>
                <span className="text-lg font-bold text-blue-900">${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-300 font-medium">
                Proceed to Checkout
              </button>
              <a 
                href="/shop" 
                className="block text-center text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Default props for demonstration
ShoppingCart.defaultProps = {
  cartItems: [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      description: 'Noise cancelling with premium sound',
      price: 89.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Smart Fitness Tracker',
      description: 'Tracks activity and sleep patterns',
      price: 69.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1532635124-547e9894b6aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ],
  onUpdateQuantity: (id, quantity) => console.log(`Update item ${id} quantity to ${quantity}`),
  onRemoveItem: (id) => console.log(`Remove item ${id}`)
};

export default ShoppingCart;