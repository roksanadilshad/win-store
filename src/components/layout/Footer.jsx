// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    Trending: ["Installments", "Electronics", "Grocery", "Health & Beauty", "Home Appliances", "Mobile Accessories"],
    Information: ["About Us", "Contact Us", "FAQs", "Shipping & Return", "Privacy policy", "Terms & Conditions"],
    "Customer Care": ["My Account", "Track Your Order", "Recently Viewed", "Wishlist", "Compare", "Become a Vendor"]
  };

  return (
    <footer className="bg-[#393939] text-footer-text pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col gap-4">
             <h1 className="text-2xl text-white font-bold tracking-tighter">WIN<span className="font-light">store</span></h1>
            <div className="mt-4">
              <p className="text-[#00CAD7] font-medium mb-1  text-sm">Got questions? Call us 24/7!</p>
              <p className="text-xs leading-relaxed">03 111 666 144</p>
              <p className="text-xs leading-relaxed">0317 1777015</p>
            </div>
            <div>
              <p className="text-[#00CAD7] font-medium mb-1 text-sm">Contact info</p>
              <p className="text-xs">info@winstore.pk</p>
            </div>
            <div className="flex gap-4 mt-2">
              <FaFacebookF className="cursor-pointer hover:text-[#00CAD7] transition-colors" />
              <FaTwitter className="cursor-pointer hover:text-[#00CAD7] transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#00CAD7] transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-[#00CAD7] transition-colors" />
            </div>
          </div>

          {/* Columns 2-4: Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#00CAD7] font-bold mb-6 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Payment Badges */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-end items-center gap-4">
          <div className="flex gap-2 h-8">
            <img src="https://i.pinimg.com/1200x/3d/d3/de/3dd3de3c0ea439adcd71d4531e0e181c.jpg" alt="Visa" className="h-full object-contain rounded bg-white px-1" />
            <img src="https://i.pinimg.com/1200x/36/7c/26/367c26d9ba9b9043c9bb4b5a17ab4d2f.jpg" alt="Mastercard" className="h-full object-contain rounded bg-white px-1" />
            <img src="https://i.pinimg.com/736x/47/90/f4/4790f4779df6c6d2aeba911e215e8f42.jpg" alt="Cash on Delivery" className="h-full object-contain rounded bg-white px-1" />
            <img src="https://i.pinimg.com/1200x/da/4f/ad/da4fadae3a053e312bfb280d6e3f3a9c.jpg" alt="Installment Plans" className="h-full object-contain rounded bg-white px-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;