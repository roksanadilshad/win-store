import "./App.css";
import BestDeals from "./components/BestDeals";
import CategorySection from "./components/CategorySection";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import NewArrivals from "./components/NewArrivals";
import HeroBanner from "./pages/Banner";

function App() {
  return (
    <>
    <Navbar/>
      <HeroBanner/>
      <CategorySection/>
      <NewArrivals/>
      <BestDeals/>
      <Footer/>
    </>
  );
}

export default App;
