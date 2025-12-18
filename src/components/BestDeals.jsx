import React, { useState } from 'react';
import { BEST_DEALS } from '../constants/deals';
import DealCard from './DealCard';

const BestDeals = () => {
    const [activeTab, setActiveTab] = useState("KITCHEN APPLIANCES");
console.log(BEST_DEALS.products);

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header with Navigation Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 pb-2">
          Best <span className="text-[#1CB1AD]">Deals</span>
        </h2>
        <div className="flex gap-6 overflow-x-auto w-full md:w-auto">
          {BEST_DEALS.categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold whitespace-nowrap pb-2 transition-all ${
                activeTab === tab 
                ? "text-[#1CB1AD] border-b-2 border-[#1CB1AD]" 
                : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Complex Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        
        {/* Left Column - Two small cards */}
        <div className="md:col-span-1 space-y-4 row-span-2">
          <DealCard product={BEST_DEALS.products[0]} variant="horizontal" />
          <DealCard product={BEST_DEALS.products[0]} variant="horizontal" showStock />
        </div>

        {/* Center Column - One Large Featured Card */}
        <div className="md:col-span-2 row-span-2">
          <div className="h-full bg-white border border-gray-100 p-6 relative flex flex-col items-center">
            <div className="absolute top-6 left-6">
              <span className="text-red-500 text-2xl font-serif">Special</span>
              <p className="text-2xl font-bold leading-tight">Offer</p>
            </div>
            <div className="absolute top-6 right-6 bg-red-500 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-[10px] font-bold shadow-lg">
              <span>Save</span>
              <span>10%</span>
            </div>
            <img src="/images/deals/watch-large.png" alt="Smartwatch" className="w-64 my-auto object-contain" />
            <div className="w-full">
              <h3 className="text-sm font-medium">Nintendo Switch Console</h3>
              <div className="flex gap-2 items-baseline">
                <span className="text-red-500 font-bold">Rs.65,208</span>
                <span className="text-xs text-gray-400 line-through">Rs.66,000</span>
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-[#1CB1AD] font-bold">
                <span>Already Sold: 6</span>
                <span>Available: 30</span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1 overflow-hidden">
                <div className="bg-[#1CB1AD] h-full w-[20%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Two small cards */}
        <div className="md:col-span-1 space-y-4 row-span-2">
          <DealCard product={BEST_DEALS.products[0]} variant="horizontal" />
          <DealCard product={BEST_DEALS.products[0]} variant="horizontal" showStock />
        </div>
         {
           BEST_DEALS.products.map(pro => (<DealCard pro={pro} key={pro.id}></DealCard>))
         }
      </div>
    </section>
  );
};


export default BestDeals;