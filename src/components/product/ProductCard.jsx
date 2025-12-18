import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className="bg-white border border-gray-100 p-4 flex flex-col items-center group hover:shadow-lg transition-shadow duration-300">
      {/* Vendor & Title */}
      <div className="w-full text-left mb-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-tighter mb-1">
          {product.vendor}
        </p>
        <h3 className="text-sm font-medium text-secondary truncate">
          {product.name}
        </h3>
      </div>

      {/* Product Image */}
      <div className="h-32 w-full flex items-center justify-center mb-6 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Pricing */}
      <div className="w-full flex justify-between items-baseline mb-4">
        <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
        <span className="text-sm font-bold text-[#1CB1AD]">{product.newPrice}</span>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-[#1CB1AD] text-white py-2 text-sm font-medium hover:bg-opacity-90 transition-colors rounded-sm">
        Add to cart
      </button>
    </div>
    );
};

export default ProductCard;