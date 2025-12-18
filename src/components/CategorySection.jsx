import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { CATEGORIES } from '../constants/categories';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 p-16 relative group">
      {/* Header with stylized typography */}
      {/* <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-extrabold text-secondary tracking-tight">
          Shop by <span className="text-primary font-light">Category</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
      </div> */}

      {/* Custom Navigation Buttons */}
      <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-xl border border-white/50 hover:bg-primary hover:text-white transition-all duration-300 -translate-x-1/2 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center">
        <FiChevronLeft size={22} />
      </button>
      
      <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-xl border border-white/50 hover:bg-primary hover:text-white transition-all duration-300 translate-x-1/2 opacity-0 group-hover:opacity-100 hidden lg:flex items-center justify-center">
        <FiChevronRight size={22} />
      </button>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-4"
      >
        {CATEGORIES.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group/card">
              {/* Image with Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover/card:opacity-80 transition-opacity duration-500"></div>
              
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110"
                loading="lazy"
              />
              
              {/* Premium Label Box */}
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                <div className="bg-white/80 backdrop-blur-xl border border-white/40 py-4 px-5 flex justify-between items-center rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-0.5">Explore</span>
                    <span className="font-bold text-gray-900 text-base">{cat.name}</span>
                  </div>
                  <a 
                    href={cat.shopUrl} 
                    className="bg-primary p-2 rounded-lg text-white hover:scale-110 transition-transform shadow-lg shadow-primary/20"
                  >
                    <FiChevronRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySection;