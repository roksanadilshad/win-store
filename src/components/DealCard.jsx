import React from 'react';

const DealCard = ({ pro, variant, showStock }) => {
    console.log(pro);
    
    return (
        <div>
  <div className="bg-white border border-gray-100 p-4 h-[192px] flex flex-col justify-between relative">
     <div className="flex justify-between items-start">
        <div>
           <p className="text-[10px] text-gray-500">{pro.title}</p>
           <p className="text-blue-400 text-xs font-bold">{pro.price}</p>
           <p className="text-[10px] text-gray-300 line-through">{pro.oldPrice}</p>
        </div>
        <div className="text-right">
           <p className="text-cyan-500 font-serif italic">Special</p>
           <p className="text-sm font-bold">Offer</p>
        </div>
     </div>
     <img src={pro.image} className="h-20 object-contain mx-auto" />
     {showStock && (
       <div className="text-[8px] text-cyan-600 font-bold flex justify-between uppercase">
          <span>Already Sold: 6</span>
          <span>Available: 30</span>
       </div>
     )}
  </div>
        </div>
    );
};

export default DealCard;