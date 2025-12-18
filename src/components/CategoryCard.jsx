import React from 'react';

const CategoryCard = ({ name, image }) => {
    return (
        <div>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm bg-white shadow-sm border border-gray-100">
      {/* Category Image */}
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Label Overlay */}
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <div className="bg-white py-2 px-4 flex justify-between items-center shadow-md">
          <span className="font-medium text-gray-800 text-sm">{name}</span>
          <span className="text-btn-blue text-xs font-semibold hover:underline">Shop</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CategoryCard;