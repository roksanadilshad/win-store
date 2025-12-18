import React from 'react';
import { NEW_ARRIVALS } from '../constants/product';
import ProductCard from './product/ProductCard';

const NewArrivals = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-8 border-b border-gray-100 pb-2">
        <h2 className="text-2xl font-normal text-gray-800">
          <span className="text-[#1CB1AD] font-semibold">New</span> Arrivals
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {NEW_ARRIVALS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
        </div>
    );
};

export default NewArrivals;