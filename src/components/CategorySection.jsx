// src/components/CategorySection.jsx
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CATEGORIES } from '../constants/categories';

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 relative group">
      {/* Section Header (Optional, if needed) */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-secondary">Shop by Category</h2>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
        <FiChevronLeft size={24} className="text-gray-600" />
      </button>
      
      <button className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 hidden md:block">
        <FiChevronRight size={24} className="text-gray-600" />
      </button>

      {/* The Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="relative h-64 overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Background Image */}
            <img 
    src={cat.image} 
    alt={cat.name} 
    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
    loading="lazy" // Professional practice for performance
  />
            
            {/* The White Label Box (Matches Image 3) */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm py-3 px-4 flex justify-between items-center shadow-sm">
                <span className="font-semibold text-gray-800 tracking-tight">{cat.name}</span>
                <a 
                  href={cat.shopUrl} 
                  className="text-[#00B4FF] text-xs font-bold hover:underline uppercase tracking-wider"
                >
                  Shop
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;