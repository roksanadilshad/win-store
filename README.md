# WinStore - Premium E-Commerce Marketplace

WinStore is a high-performance, fully responsive E-commerce storefront built with **React** and **Tailwind CSS**. It features a modern UI/UX design, dynamic product filtering, and mobile-optimized interactive elements.

---
## Live : 
 https://win-store-alpha.vercel.app/

## 🚀 Key Features

* **Adaptive Hero Banner:** High-impact slider featuring fade transitions and floating product animations. 
* **Intelligent Layouts:** Components automatically switch from sliders (Desktop) to stable grids (Mobile) to ensure a smooth user experience.
* **Dynamic Product Filtering:** "Best Deals" section allows users to filter products by category in real-time.
* **Advanced Navigation:** * Responsive Navbar with a slide-out mobile drawer.
    * Expandable mobile search interface.
    * Custom-styled Swiper navigation for "New Arrivals."
* **Inventory Tracking:** Visual progress bars indicating stock levels and "already sold" counts.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Frontend Framework |
| **Tailwind CSS** | Responsive Styling & Layouts |
| **Swiper.js** | Interactive Carousels & Sliders |
| **React Icons** | UI iconography (Feather & Font Awesome) |
| **Lucide/Fi Icons** | Clean, minimalist icons |

---

## 📂 Project Structure

```text
src/
├── components/         # Reusable UI Components
│   ├── Navbar.jsx      # Responsive Navigation
│   ├── HeroBanner.jsx  # Animated Hero Slider
│   ├── BestDeals.jsx   # Filterable Product Grid
│   └── NewArrivals.jsx # Horizontal Product Carousel
├── constants/          # Static Data & Mock JSON
│   ├── deals.js        # Best Deals Data
│   └── product.js      # New Arrivals Data
├── App.jsx             # Main Application Root
└── index.css           # Global Styles & Custom Animations