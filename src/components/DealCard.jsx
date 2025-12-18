import React from 'react';

const DealCard = ({ pro, showStock }) => {
  if (!pro) return null;

  return (
    <div className="bg-white group relative flex flex-col justify-between p-4 h-[220px] rounded-xl border border-slate-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Top Section: Branding & Price */}
      <div className="flex justify-between items-start z-10">
        <div className="space-y-0.5">
          <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider line-clamp-1">
            {pro.title}
          </h4>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-[#00B4FF] leading-tight">
              {pro.price}
            </span>
            <span className="text-[10px] text-slate-300 line-through decoration-slate-300/50">
              {pro.oldPrice}
            </span>
          </div>
        </div>

        {/* Dynamic "Special" Badge */}
        <div className="flex flex-col items-end">
          <span className="bg-gradient-to-r from-[#1CB1AD] to-[#00B4FF] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm mb-1 uppercase tracking-tighter">
            Special
          </span>
          <span className="text-[10px] font-serif italic font-bold text-slate-700">Offer</span>
        </div>
      </div>

      {/* Image Container with subtle glow */}
      <div className="relative h-28 w-full flex items-center justify-center bg-slate-50/50 rounded-lg my-2 group-hover:bg-white transition-colors duration-300">
        <img 
          src={pro.image} 
          alt={pro.title} 
          className="max-h-[85%] object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out" 
        />
        {/* Decorative background circle */}
        <div className="absolute inset-0 bg-[#1CB1AD]/5 rounded-full scale-0 group-hover:scale-75 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
      </div>

      {/* Bottom Section: Stock or Actions */}
      <div className="relative z-10">
        {showStock ? (
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-bold">
              <span className="text-slate-400">SOLD: <span className="text-slate-700">6</span></span>
              <span className="text-[#1CB1AD]">AVAIL: 30</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#1CB1AD] to-[#00B4FF] h-full rounded-full transition-all duration-1000"
                style={{ width: '20%' }}
              />
            </div>
          </div>
        ) : (
          <div className="pt-2">
            <button className="w-full text-[10px] font-bold text-[#1CB1AD] border border-[#1CB1AD]/20 py-1 rounded-md group-hover:bg-[#1CB1AD] group-hover:text-white transition-all">
              VIEW DEAL
            </button>
          </div>
        )}
      </div>

      {/* Subtle border shine on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1CB1AD]/10 rounded-xl pointer-events-none transition-colors" />
    </div>
  );
};

export default DealCard;