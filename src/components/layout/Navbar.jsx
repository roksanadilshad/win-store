import { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiPhone, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="w-full text-white font-sans relative">
      {/* TOP HEADER */}
      <div className="bg-primary py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4 md:gap-10">
          
          {/* Mobile Menu Toggle & Logo */}
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-white" 
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu size={24} />
            </button>
            <div className="flex-shrink-0 cursor-pointer">
               <h1 className="text-xl md:text-2xl font-bold tracking-tighter">
                 WIN<span className="font-light">store</span>
               </h1>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl bg-white rounded-md overflow-hidden h-11">
            <select className="bg-white text-gray-600 px-4 text-sm outline-none border-r border-gray-200 cursor-pointer">
              <option>All categories</option>
              <option>Electronics</option>
              <option>Home Decor</option>
            </select>
            <input 
              type="text" 
              placeholder="Search for products" 
              className="flex-1 px-4 text-gray-800 outline-none text-sm"
            />
            <button className="bg-[#B3B3B3] px-5 text-white hover:bg-opacity-90 transition flex items-center justify-center">
              <FiSearch size={20} />
            </button>
          </div>

          {/* User & Cart Actions */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Phone Info */}
            <div className="hidden xl:flex items-center gap-3 border-r border-white/20 pr-8">
              <FiPhone size={24} className="text-white" />
              <div className="leading-tight text-left">
                <p className="text-white/70 text-[10px]">Call Us Now</p>
                <p className="font-bold text-xs">+011 5827918</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6">
              {/* Mobile Search Icon Toggle */}
              <FiSearch 
                size={22} 
                className="lg:hidden cursor-pointer" 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              <FiUser size={22} className="hidden md:block cursor-pointer hover:text-white/70 transition" />
              <div className="relative cursor-pointer flex items-center gap-2 group">
                <div className="relative">
                  <FiShoppingCart size={24} />
                  <span className="bg-[#FFC107] text-black text-[10px] font-bold h-4 w-4 md:h-5 md:w-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
                    {cartCount}
                  </span>
                </div>
                <span className="hidden sm:block text-sm font-semibold">Cart</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar Expandable */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 pb-3 pt-2">
            <div className="flex bg-white rounded-md overflow-hidden h-10">
              <input 
                type="text" 
                placeholder="Search..." 
                className="flex-1 px-4 text-gray-800 outline-none text-sm"
              />
              <button className="bg-[#B3B3B3] px-4 text-white">
                <FiSearch size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM NAVIGATION (Desktop Only) */}
      <div className="hidden lg:block bg-secondary border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-11">
          <div className="flex items-center gap-8 h-full">
            <button className="flex items-center gap-3 bg-[#03484D] px-6 h-full text-[12px] font-semibold tracking-wide hover:bg-opacity-80 transition">
              <FiMenu size={16} /> BROWSE BY CATEGORY
            </button>
            <ul className="flex items-center gap-6 text-[12px] font-medium uppercase tracking-wider">
              <li className="hover:text-white/70 cursor-pointer transition">Home</li>
              <li className="hover:text-white/70 cursor-pointer transition">Easy Installments</li>
              <li className="hover:text-white/70 cursor-pointer transition">Brands</li>
              <li className="hover:text-white/70 cursor-pointer transition">Become a Vendor</li>
            </ul>
          </div>
          
          <div className="flex gap-4 text-white/80">
            <FaFacebookF className="hover:text-white cursor-pointer text-xs" />
            <FaTwitter className="hover:text-white cursor-pointer text-xs" />
            <FaLinkedinIn className="hover:text-white cursor-pointer text-xs" />
            <FaInstagram className="hover:text-white cursor-pointer text-xs" />
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Drawer Content */}
          <div className="relative bg-secondary w-[280px] h-full shadow-2xl flex flex-col">
            <div className="p-5 flex items-center justify-between border-b border-white/10">
              <h2 className="font-bold text-lg italic">WINstore</h2>
              <FiX 
                size={24} 
                className="cursor-pointer" 
                onClick={() => setIsMenuOpen(false)} 
              />
            </div>
            
            <ul className="flex flex-col p-4 gap-4 text-sm font-semibold uppercase">
              <li className="p-2 hover:bg-white/5 rounded">Home</li>
              <li className="p-2 hover:bg-white/5 rounded">Categories</li>
              <li className="p-2 hover:bg-white/5 rounded">Monthly Installments</li>
              <li className="p-2 hover:bg-white/5 rounded">Shop By Brand</li>
              <li className="p-2 hover:bg-white/5 rounded">Vendors</li>
            </ul>

            <div className="mt-auto p-6 border-t border-white/10 flex justify-center gap-6">
               <FaFacebookF size={18} />
               <FaTwitter size={18} />
               <FaInstagram size={18} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;