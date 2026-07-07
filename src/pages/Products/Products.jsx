import "./Products.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ProductsHero from "../../components/ProductsHero/ProductsHero";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
// import ProductCategories from "../../components/ProductCategories/ProductCategories";
// import ProductGrid from "../../components/ProductGrid/ProductGrid";
// import ProductPagination from "../../components/ProductPagination/ProductPagination";

function Products() {
  return (
    <>
      <Navbar />

      <ProductsHero />
      <ProductFilters />
      <Footer />
    </>
  );
}

export default Products;