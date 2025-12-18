import React, { useState } from 'react';
import { BEST_DEALS } from '../constants/deals';
import DealCard from './DealCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const BestDeals = () => {
  const [activeTab, setActiveTab] = useState("KITCHEN APPLIANCES");

  // Filter products based on the active tab
  const filteredProducts = BEST_DEALS.products.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 pb-2">
          Best <span className="text-[#1CB1AD]">Deals</span>
        </h2>
        <div className="flex gap-6 overflow-x-auto w-full md:w-auto pb-2">
          {BEST_DEALS.categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold whitespace-nowrap transition-all border-b-2 pb-2 ${
                activeTab === tab 
                ? "text-[#1CB1AD] border-[#1CB1AD]" 
                : "text-gray-400 border-transparent hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Left Column: First 2 Products */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {filteredProducts.slice(0, 2).map((product) => (
            <DealCard key={product.id} pro={product} />
          ))}
        </div>

        {/* Center Column: Featured Slider */}
        <div className="md:col-span-2 bg-white border border-gray-100 p-8 rounded-sm relative">
          <div className="absolute top-6 left-8 z-10">
            <span className="text-red-500 text-3xl font-serif italic">Special</span>
            <p className="text-3xl font-bold text-gray-800">Offer</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="h-64 mt-12 mb-8"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id} className="flex items-center justify-center">
                <img src={product.image} alt={product.title} className="max-h-full object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Featured Info (using the first product in the list) */}
          {filteredProducts[0] && (
            <div>
              <h3 className="text-lg font-semibold">{filteredProducts[0].title}</h3>
              <div className="flex gap-3 items-baseline">
                <span className="text-xl font-bold text-red-500">{filteredProducts[0].price}</span>
                <span className="text-sm text-gray-400 line-through">{filteredProducts[0].oldPrice}</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-[11px] text-[#1CB1AD] font-bold">
                  <span>ALREADY SOLD: 6</span>
                  <span>AVAILABLE: 30</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full mt-1">
                  <div className="bg-[#1CB1AD] h-full w-[20%]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Next 2 Products */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {filteredProducts.length > 2 ? (
            filteredProducts.slice(2, 4).map((product) => (
              <DealCard key={product.id} pro={product} showStock />
            ))
          ) : (
            /* Fallback: If category has few items, show items from other categories or placeholders */
            <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-100 text-gray-300 text-xs text-center p-4">
              More {activeTab} deals coming soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;