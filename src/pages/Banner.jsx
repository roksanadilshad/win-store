// src/components/HeroBanner.jsx
const HeroBanner = () => {
  return (
    <section className="bg-banner-bg w-full min-h-[400px] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 items-center py-12">
        
        {/* LEFT CONTENT */}
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-normal leading-tight">
            Shop <span className="text-banner-blue font-semibold">Computer &</span> <br />
            <span className="text-banner-blue font-semibold">experience</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-md text-sm leading-relaxed">
            You Cannot Inspect Quality Into The Product; It Is Already There. 
            I Am Not A Product Of My Circumstances. I Am A Product Of My Decisions.
          </p>
          <button className="mt-8 bg-btn-blue text-white px-10 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-md">
            View More
          </button>
        </div>

        {/* RIGHT CONTENT (Images) */}
        <div className="relative flex justify-center items-center">
          {/* Main Product Images Placeholder */}
          <div className="relative z-10 flex items-end gap-4">
             {/* Replace with actual image paths from your Figma export */}
             <img src="/images/headphones.png" alt="Headphones" className="w-64 object-contain" />
             <img src="/images/laptop.png" alt="Laptop" className="w-80 object-contain" />
          </div>

          {/* 40% OFF Badge */}
          <div className="absolute top-0 right-10 md:right-20 w-32 h-32 gradient-orange rounded-full flex flex-col items-center justify-center text-white shadow-xl z-20 border-4 border-white/20">
            <span className="text-3xl font-bold leading-none">40%</span>
            <span className="text-xl font-light leading-none">Off</span>
          </div>

          {/* Decorative Plant/Background elements from Figma */}
          <img src="/images/plant.png" alt="" className="absolute -top-10 right-0 opacity-40 w-40" />
        </div>
      </div>

      {/* CAROUSEL DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <span className="w-10 h-2 bg-primary rounded-full cursor-pointer"></span>
        <span className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></span>
        <span className="w-8 h-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"></span>
      </div>
    </section>
  );
};

export default HeroBanner;