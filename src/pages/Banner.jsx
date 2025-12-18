import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      title: "Computer &",
      subtitle: "experience",
      desc: "You Cannot Inspect Quality Into The Product; It Is Already There. I Am Not A Product Of My Circumstances.",
      img1: "https://i.pinimg.com/1200x/1f/d7/ef/1fd7ef1764b1c3b6fefa9cf9fec8483d.jpg",
      img2: "https://i.pinimg.com/1200x/ba/29/40/ba29400d0c9c33df746821f0bc808bcc.jpg",
      discount: "40%",
      bgColor: "bg-[#F3F9D2]"
    },
    {
      id: 2,
      title: "Smart Home",
      subtitle: "innovation",
      desc: "Transform your living space with the latest in automated technology and high-end audio solutions.",
      img1: "https://i.pinimg.com/736x/4f/ed/c8/4fedc8c64765f23c2f539f917fe42a5d.jpg", 
      img2: "https://i.pinimg.com/736x/a7/d1/8a/a7d18a2b16cdee2719bc6e681fbace8b.jpg",
      discount: "30%",
      bgColor: "bg-[#E2F3F5]"
    }
  ];

  return (
    <section className="w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !w-6 md:!w-8 !h-1 !rounded-none !bg-gray-400 !opacity-100',
            bulletActiveClass: '!bg-primary !w-10 md:!w-12',
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Adjusted min-height for mobile vs desktop */}
            <div className={`${slide.bgColor} w-full min-h-[600px] md:min-h-[500px] flex items-center transition-colors duration-1000`}>
              <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center py-16 md:py-12">
                
                {/* LEFT CONTENT */}
                <div className="z-10 animate-fadeIn text-center md:text-left order-2 md:order-1">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-gray-800">
                    Shop <span className="text-banner-blue font-semibold">{slide.title}</span> <br />
                    <span className="text-banner-blue font-semibold">{slide.subtitle}</span>
                  </h1>
                  <p className="text-gray-500 mt-4 md:mt-6 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
                    {slide.desc}
                  </p>
                  <button className="mt-8 bg-btn-blue text-white px-8 md:px-10 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
                    View More
                  </button>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative flex justify-center items-center h-full min-h-[250px] md:min-h-[350px] order-1 md:order-2">
                  
                  {/* Product Images - Adjusted sizes for mobile */}
                  <div className="relative z-10 flex items-end gap-3 md:gap-4 animate-float">
                    <img 
                        src={slide.img1} 
                        alt="Product 1" 
                        className="w-32 sm:w-40 md:w-64 rounded-xl md:rounded-2xl object-contain drop-shadow-xl" 
                    />
                    <img 
                        src={slide.img2} 
                        alt="Product 2" 
                        className="w-40 sm:w-52 md:w-80 rounded-xl md:rounded-2xl object-contain drop-shadow-2xl" 
                    />
                  </div>

                  {/* Discount Badge - Scaled for mobile */}
                  <div className="absolute -top-4 right-2 sm:right-10 md:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 gradient-orange rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-20 border-4 border-white/30 scale-90 md:scale-110 animate-pulse-slow">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black leading-none">{slide.discount}</span>
                    <span className="text-sm sm:text-base md:text-xl font-light leading-none">Off</span>
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl scale-90 md:scale-75 -z-10"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;