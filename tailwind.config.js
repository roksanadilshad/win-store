// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#03484D",   // Top navbar bg
        secondary: "#0E3B3E", // Bottom navbar bg
        accent: "#FFFFFF",    // Search button / hover
        muted: "#ABA3A3",     // Secondary text
      },
      fontFamily: {
        // Check Figma for the font name, usually it's Inter or Montserrat
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}