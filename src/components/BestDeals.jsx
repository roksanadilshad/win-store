import React, { useState } from 'react';
import { BEST_DEALS } from '../constants/deals';
import DealCard from './DealCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const BestDeals = () => {
  const [activeTab, setActiveTab] = useState("KITCHEN APPLIANCES");

  const filteredProducts = BEST_DEALS.products.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Header Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-4 md:pb-2">
          Best <span className="text-[#1CB1AD]">Deals</span>
        </h2>
        
        <div className="flex gap-4 md:gap-6 overflow-x-auto w-full md:w-auto pb-2 scrollbar-hide">
          {BEST_DEALS.categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] md:text-xs font-bold whitespace-nowrap transition-all border-b-2 pb-2 ${
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
        
        {/* Left Column (Order 2 on Mobile) */}
        <div className="flex flex-col gap-4 order-2 md:order-1">
          {filteredProducts.slice(0, 2).map((product) => (
            <DealCard key={product.id} pro={product} />
          ))}
        </div>

        {/* Center Column (Order 1 on Mobile) */}
        <div className="md:col-span-2 bg-white border border-gray-100 p-6 md:p-8 rounded-sm relative order-1 md:order-2 flex flex-col min-h-[450px] md:min-h-0">
          <div className="absolute top-4 left-6 md:top-6 md:left-8 z-10">
            <span className="text-red-500 text-xl md:text-3xl font-serif italic leading-none">Special</span>
            <p className="text-xl md:text-3xl font-bold text-gray-800 leading-tight">Offer</p>
          </div>

          <div className="mt-10 md:mt-12 mb-4">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              // --- KEY CHANGES HERE ---
              enabled={false} // Disable slider by default (mobile)
              breakpoints={{
                768: {
                  enabled: true, // Enable slider for desktop (medium screens +)
                },
              }}
              // ------------------------
              autoplay={{ delay: 3500 }}
              pagination={{ 
                clickable: true,
                el: '.custom-pagination' // Move dots to avoid overlapping info
              }}
              className="w-full h-[220px] md:h-[300px]" 
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id} className="flex items-center justify-center p-4">
                   <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-h-full w-auto object-contain" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom pagination container to keep dots tidy on desktop */}
            <div className="custom-pagination hidden md:flex justify-center mt-2"></div>
          </div>

          {filteredProducts[0] && (
            <div className="mt-auto pt-4 border-t border-gray-50">
              <h3 className="text-sm md:text-lg font-semibold line-clamp-1 text-gray-800">
                {filteredProducts[0].title}
              </h3>
              <div className="flex gap-3 items-baseline mt-1">
                <span className="text-lg md:text-2xl font-bold text-red-500">{filteredProducts[0].price}</span>
                <span className="text-xs md:text-sm text-gray-400 line-through font-medium">{filteredProducts[0].oldPrice}</span>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between text-[10px] md:text-[11px] font-bold mb-1.5 uppercase tracking-wide">
                  <span className="text-gray-400">Already Sold: <span className="text-gray-800">6</span></span>
                  <span className="text-[#1CB1AD]">Available: 30</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#1CB1AD] h-full rounded-full w-[20%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Order 3 on Mobile) */}
        <div className="flex flex-col gap-4 order-3">
          {filteredProducts.slice(2, 4).map((product) => (
            <DealCard key={product.id} pro={product} showStock />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;