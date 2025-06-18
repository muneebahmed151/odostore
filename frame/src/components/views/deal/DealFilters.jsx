import React from 'react';

const DealFilters = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-blue-900 mb-6">Filter Deals</h2>
      
      <div className="space-y-6">
        {/* Deal Type */}
        <div>
          <h3 className="font-medium text-blue-800 mb-3">Deal Type</h3>
          <ul className="space-y-2">
            {['All Deals', 'Flash Sales', 'Daily Deals', 'Bundle Offers', 'Clearance'].map((type) => (
              <li key={type}>
                <button className="text-blue-700 hover:text-blue-900 hover:underline">
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Discount Range */}
        <div>
          <h3 className="font-medium text-blue-800 mb-3">Discount Range</h3>
          <div className="space-y-2">
            {['10-30% Off', '30-50% Off', '50-70% Off', '70%+ Off'].map((range) => (
              <div key={range} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={`range-${range}`}
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`range-${range}`} className="ml-2 text-blue-700">
                  {range}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ending Soon */}
        <div>
          <h3 className="font-medium text-blue-800 mb-3">Time Remaining</h3>
          <div className="space-y-2">
            {['Ending Today', 'Ending This Week', 'New Deals'].map((time) => (
              <div key={time} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={`time-${time}`}
                  className="h-4 w-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`time-${time}`} className="ml-2 text-blue-700">
                  {time}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealFilters;