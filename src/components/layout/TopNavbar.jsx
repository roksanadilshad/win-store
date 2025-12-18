import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className="bg-[#0F2A44] text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">WIN</span>
          <span className="text-sky-400">Store</span>
        </div>

        {/* Search */}
        <div className="flex flex-1 max-w-xl">
          <select className="bg-white text-gray-700 px-3 rounded-l-md outline-none text-sm">
            <option>All categories</option>
          </select>
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 px-3 text-sm text-gray-700 outline-none"
          />
          <button className="bg-sky-400 px-4 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-sm">
          <div>
            <p className="text-xs">Need Help?</p>
            <p className="font-semibold">+01 911 507120</p>
          </div>

          <button className="hover:text-sky-400">Sign In</button>
          <FaHeart className="cursor-pointer hover:text-sky-400" />
          <div className="flex items-center gap-1 cursor-pointer hover:text-sky-400">
            <FaShoppingCart />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
