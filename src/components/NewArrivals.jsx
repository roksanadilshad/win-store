import React from 'react';
import { NEW_ARRIVALS } from '../constants/product';
import ProductCard from './product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import Swiper styles
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
        
        {/* Custom Navigation Buttons (Professional Placement) */}
        <div className="flex gap-2">
          <button className="new-prev bg-white border border-gray-200 p-2 rounded-full hover:bg-[#1CB1AD] hover:text-white transition-all shadow-sm">
            <FiChevronLeft size={20} />
          </button>
          <button className="new-next bg-white border border-gray-200 p-2 rounded-full hover:bg-[#1CB1AD] hover:text-white transition-all shadow-sm">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={2} // Mobile default
        navigation={{
          prevEl: '.new-prev',
          nextEl: '.new-next',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }, // Desktop matching your grid
        }}
        className="pb-4"
      >
        {NEW_ARRIVALS.map((product) => (
          <SwiperSlide key={product.id}>
            {/* We pass the product to your existing ProductCard */}
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;