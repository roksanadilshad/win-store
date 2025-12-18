import React from 'react';
import { NEW_ARRIVALS } from '../constants/product';
import ProductCard from './product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/navigation';

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 relative group">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-normal text-gray-800">
          <span className="text-[#1CB1AD] font-semibold">New</span> Arrivals
        </h2>
        
        {/* Navigation Buttons: Hidden on mobile since slider is disabled */}
        <div className="hidden md:flex gap-2">
          <button className="new-prev bg-white border border-gray-200 p-2 rounded-full hover:bg-[#1CB1AD] hover:text-white transition-all shadow-sm cursor-pointer">
            <FiChevronLeft size={20} />
          </button>
          <button className="new-next bg-white border border-gray-200 p-2 rounded-full hover:bg-[#1CB1AD] hover:text-white transition-all shadow-sm cursor-pointer">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        // --- RESPONSIVE FIX ---
        slidesPerView={1} // Default for mobile if enabled
        enabled={false}   // Slider OFF by default (Mobile)
        breakpoints={{
          768: {
            enabled: true,    // Slider ON for Tablet
            slidesPerView: 4,
          },
          1024: {
            enabled: true,    // Slider ON for Desktop
            slidesPerView: 6,
          },
        }}
        // ----------------------
        navigation={{
          prevEl: '.new-prev',
          nextEl: '.new-next',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="pb-4"
      >
        {/* On Mobile (when Swiper is disabled), this becomes a standard Grid */}
        <div className="grid grid-cols-2 gap-4 md:block">
          {NEW_ARRIVALS.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      
      {/* Mobile-only fallback grid if Swiper initialization interferes with layout */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .swiper-wrapper {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
            transform: none !important;
          }
          .swiper-slide {
            width: 100% !important;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default NewArrivals;