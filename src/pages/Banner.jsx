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
            bulletClass: 'swiper-pagination-bullet !w-8 !h-1 !rounded-none !bg-gray-400 !opacity-100',
            bulletActiveClass: '!bg-primary !w-12',
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`${slide.bgColor} w-full min-h-[500px] flex items-center transition-colors duration-1000`}>
              <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 items-center py-12">
                
                {/* LEFT CONTENT (Animated) */}
                <div className="z-10 animate-fadeIn">
                  <h1 className="text-5xl md:text-6xl font-normal leading-tight text-gray-800">
                    Shop <span className="text-banner-blue font-semibold">{slide.title}</span> <br />
                    <span className="text-banner-blue font-semibold">{slide.subtitle}</span>
                  </h1>
                  <p className="text-gray-500 mt-6 max-w-md text-sm leading-relaxed">
                    {slide.desc}
                  </p>
                  <button className="mt-8 bg-btn-blue text-white px-10 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1">
                    View More
                  </button>
                </div>

                {/* RIGHT CONTENT (Slider Image Area) */}
                <div className="relative flex justify-center items-center h-full min-h-[350px]">
                  
                  {/* Product Images with Floating Animation */}
                  <div className="relative z-10 flex items-end gap-4 animate-float">
                    <img src={slide.img1} alt="Product 1" className="w-48 md:w-64 rounded-2xl object-contain drop-shadow-2xl" />
                    <img src={slide.img2} alt="Product 2" className="w-64 md:w-80 rounded-2xl object-contain drop-shadow-2xl" />
                  </div>

                  {/* 40% OFF Badge - The "Eye-Catcher" */}
                  <div className="absolute top-0 right-4 md:right-10 w-32 h-32 gradient-orange rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-20 border-4 border-white/30 scale-110 animate-pulse-slow">
                    <span className="text-3xl font-black leading-none">{slide.discount}</span>
                    <span className="text-xl font-light leading-none">Off</span>
                  </div>

                  {/* Decorative Background Element */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-75 -z-10"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global CSS for animations (Add to index.css) */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;