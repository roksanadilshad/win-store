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
            <img src="/logo.png" alt="Win Store" className="h-10 w-fit object-contain brightness-0 invert" />
            <div className="mt-4">
              <p className="text-footer-accent font-medium mb-1 text-sm">Got questions? Call us 24/7!</p>
              <p className="text-xs leading-relaxed">03 111 666 144</p>
              <p className="text-xs leading-relaxed">0317 1777015</p>
            </div>
            <div>
              <p className="text-footer-accent font-medium mb-1 text-sm">Contact info</p>
              <p className="text-xs">info@winstore.pk</p>
            </div>
            <div className="flex gap-4 mt-2">
              <FaFacebookF className="cursor-pointer hover:text-footer-accent transition-colors" />
              <FaTwitter className="cursor-pointer hover:text-footer-accent transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-footer-accent transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-footer-accent transition-colors" />
            </div>
          </div>

          {/* Columns 2-4: Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-footer-accent font-bold mb-6 text-sm uppercase tracking-wider">{title}</h4>
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
            <img src="/images/payments/visa.png" alt="Visa" className="h-full object-contain rounded bg-white px-1" />
            <img src="/images/payments/mastercard.png" alt="Mastercard" className="h-full object-contain rounded bg-white px-1" />
            <img src="/images/payments/cash.png" alt="Cash on Delivery" className="h-full object-contain rounded bg-white px-1" />
            <img src="/images/payments/installments.png" alt="Installment Plans" className="h-full object-contain rounded bg-white px-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;