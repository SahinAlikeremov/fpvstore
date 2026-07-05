import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategorySection from "../../components/CategorySection/CategorySection";
import Footer from "../../components/Footer/Footer";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import TopBrands from "../../components/TopBrands/TopBrands";
import UsedMarket from "../../components/UsedMarket/UsedMarket";
import FPVCommunity from "../../components/FPVCommunity/FPVCommunity";
import WhyFPVStore from "../../components/WhyFPVStore/WhyFPVStore";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <TopBrands />
       <section className="home-cards">

        <UsedMarket />

        <FPVCommunity />

        <WhyFPVStore />
      </section>
      
      <Footer />
    </>
  );
}

export default Home;