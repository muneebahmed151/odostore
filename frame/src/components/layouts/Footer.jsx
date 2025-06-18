import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-blue-200 text-blue-800 pt-12 pb-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-900">ODO</h3>
        <p className="text-blue-700">Your one-stop shop for all your needs.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-900">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Home</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Products</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">New Arrivals</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Featured</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Sales</a></li>
        </ul>
      </div>
      {/* Customer Service */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-900">Customer Service</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Contact Us</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">FAQs</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Shipping Policy</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Returns &amp; Exchanges</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-900 hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
      {/* Newsletter */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-900">Newsletter</h3>
        <p className="text-blue-700">Subscribe to get updates on new products and special offers!</p>
        <form className="flex flex-col space-y-3">
          <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300">
            Subscribe
          </button>
        </form>
        <div className="flex items-center space-x-2">
          <i className="fas fa-credit-card text-blue-700" />
          <div className="flex space-x-1">
            <span className="text-blue-700">We accept:</span>
            <span className="font-semibold text-blue-900">Visa, Mastercard, PayPal</span>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright */}
    <div className="border-t border-blue-200 mt-8 pt-6 text-center text-blue-700">
      <p>© 2025 ODO. All rights reserved.</p>
    </div>
  </div>
</footer> 
    </>
  )
}

export default Footer