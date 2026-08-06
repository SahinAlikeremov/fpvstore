import "./UsedMarket.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import UsedHero from "../../components/UsedHero/UsedHero";
import UsedFilters from "../../components/UsedFilters/UsedFilters";
// import UsedProductGrid from "../../components/UsedProductGrid/UsedProductGrid";
// import SellYourGear from "../../components/SellYourGear/SellYourGear";

function UsedMarket() {
  return (
    <>
      <Navbar />

      <UsedHero />

      <UsedFilters />

      {/* <UsedProductGrid /> */}

      {/* <SellYourGear /> */}

      <Footer />
    </>
  );
}

export default UsedMarket;