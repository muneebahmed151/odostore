import React from 'react';
import DealsHero from '../views/deal/DealsHero';
import DealFilters from '../views/deal/DealFilters';
import DealGrid from '../views/deal/DealGrid';
import HotDeals from '../views/deal/HotDeals';

const Deals = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <DealsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HotDeals />
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="md:w-1/4">
            <DealFilters />
          </div>
          <div className="md:w-3/4">
            <DealGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;