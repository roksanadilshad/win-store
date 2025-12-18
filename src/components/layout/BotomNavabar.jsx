import { FaBars, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const BottomNavbar = () => {
  return (
    <div className="bg-[#123A5D] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 font-medium hover:text-sky-400">
            <FaBars />
            Browse by Category
          </button>

          <nav className="hidden md:flex items-center gap-5">
            <a href="#" className="hover:text-sky-400">Home</a>
            <a href="#" className="hover:text-sky-400">New Arrivals</a>
            <a href="#" className="hover:text-sky-400">Shop by Brands</a>
            <a href="#" className="hover:text-sky-400">Become a Vendor</a>
          </nav>
        </div>

        {/* Right Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <FaFacebookF className="cursor-pointer hover:text-sky-400" />
          <FaTwitter className="cursor-pointer hover:text-sky-400" />
          <FaInstagram className="cursor-pointer hover:text-sky-400" />
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
