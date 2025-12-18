import React from 'react';
import { FiHeart, FiEye } from 'react-icons/fi'; // Professional icons

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-lg p-5 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      
      {/* Floating Action Icons (Hidden until hover) */}
      <div className="absolute right-3 top-20 flex flex-col gap-2 z-10 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
        <button className="bg-white p-2 rounded-full shadow-md text-slate-600 hover:bg-[#1CB1AD] hover:text-white transition-colors">
          <FiHeart size={18} />
        </button>
        <button className="bg-white p-2 rounded-full shadow-md text-slate-600 hover:bg-[#1CB1AD] hover:text-white transition-colors">
          <FiEye size={18} />
        </button>
      </div>

      {/* Product Image Wrapper */}
      <div className="relative h-44 w-full flex items-center justify-center mb-6 bg-slate-50 rounded-md overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-[85%] object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle Overlay on Image */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="flex-1">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">
          {product.vendor}
        </p>
        <h3 className="text-[15px] font-semibold text-slate-800 line-clamp-2 min-h-[40px] leading-snug group-hover:text-[#1CB1AD] transition-colors">
          {product.name}
        </h3>
        
        {/* Rating Stars (Mock) */}
        <div className="flex text-amber-400 text-xs mt-2 mb-3">
          {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
          <span className="text-slate-400 ml-1 font-medium">(12)</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-lg font-bold text-[#1CB1AD]">
            {product.newPrice}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-slate-400 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>

      {/* Professional Add to Cart Button */}
      <button className="w-full bg-[#1CB1AD] text-white py-2.5 rounded-md text-sm font-bold tracking-wide shadow-sm hover:bg-[#189995] active:scale-95 transition-all flex items-center justify-center gap-2">
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default ProductCard;