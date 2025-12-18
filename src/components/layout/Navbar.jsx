import { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0); // Basic hook usage for functionality

  return (
    <nav className="w-full text-white font-sans">
      {/* TOP HEADER */}
      <div className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-10">
          
          {/* Logo - Matches the 'Win Store' style */}
          <div className="flex-shrink-0 cursor-pointer">
             {/* <img src="/logo.png" alt="Win Store" className="h-10 object-contain" /> */}
             {/* If you don't have the logo image yet, use text: */}
             <h1 className="text-2xl font-bold tracking-tighter">WIN<span className="font-light">store</span></h1>
          </div>

          {/* Search Bar - Professional Multi-part Input */}
          <div className="flex-1 max-w-2xl flex bg-white rounded-md overflow-hidden h-11">
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
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-3">
              <FiPhone size={28} className="text-white" />
              <div className="leading-tight">
                <p className="text-muted text-[11px]">Call Us Now</p>
                <p className="font-bold text-sm">+011 5827918</p>
                <p className="text-[11px] cursor-pointer hover:underline">Sign In</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <FiUser size={24} className="cursor-pointer hover:text-muted transition" />
              <FiHeart size={24} className="cursor-pointer hover:text-muted transition" />
              <div className="relative cursor-pointer flex items-center gap-2 group">
                <div className="relative">
                  <FiShoppingCart size={26} />
                  <span className="bg-[#FFC107] text-black text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
                    {cartCount}
                  </span>
                </div>
                <span className="text-sm font-semibold">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          <div className="flex items-center gap-10 h-full">
            <button className="flex items-center gap-3 bg-[#03484D] px-6 h-full text-sm font-semibold tracking-wide hover:bg-opacity-80 transition">
              <FiMenu size={18} /> BROWSE BY CATEGORY
            </button>
            <ul className="flex items-center gap-8 text-[13px] font-medium uppercase tracking-wider">
              <li className="hover:text-muted cursor-pointer transition">Home</li>
              <li className="hover:text-muted cursor-pointer transition whitespace-nowrap">Easy Monthly Installments</li>
              <li className="hover:text-muted cursor-pointer transition whitespace-nowrap">Shop by Brands</li>
              <li className="hover:text-muted cursor-pointer transition whitespace-nowrap">Become a Vendor</li>
            </ul>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-5 text-white/80">
            <FaFacebookF className="hover:text-white cursor-pointer text-sm" />
            <FaTwitter className="hover:text-white cursor-pointer text-sm" />
            <FaLinkedinIn className="hover:text-white cursor-pointer text-sm" />
            <FaInstagram className="hover:text-white cursor-pointer text-sm" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;