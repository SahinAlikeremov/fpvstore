import "./Products.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ProductsHero from "../../components/ProductsHero/ProductsHero";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

function Products() {
    return (
        <>
            <Navbar />

            <main className="products-page">

                <ProductsHero />

                <ProductFilters />

                <ProductGrid />

            </main>

            <Footer />
        </>
    );
}

export default Products;