import "./Brands.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BrandGrid from "../../components/BrandGrid/BrandGrid";
import BrandsHero from "../../components/BrandsHero/BrandsHero";
import BrandFeatures from "../../components/BrandFeatures/BrandFeatures";
import BecomePartner from "../../components/BecomePartner/BecomePartner"; 

function Brands() {
  return (
    <>
      <Navbar />

      <BrandsHero />
      <BrandGrid />
      <BrandFeatures />
      <BecomePartner />
      <Footer />
    </>
  );
}

export default Brands;