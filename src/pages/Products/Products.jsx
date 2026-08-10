import "./Products.css";

import { useMemo, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ProductsHero from "../../components/ProductsHero/ProductsHero";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

import { products } from "../../data/products";

function Products() {

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        category: "all",
        brand: "all",
        price: "all",
        sort: "newest"
    });

    const filteredProducts = useMemo(() => {

        let result = [...products];

        // SEARCH
        if (search.trim()) {

            const searchValue = search
                .toLowerCase()
                .trim();

            result = result.filter((product) =>
                product.title.toLowerCase().includes(searchValue) ||
                product.brand.toLowerCase().includes(searchValue) ||
                product.category.toLowerCase().includes(searchValue)
            );
        }

        // CATEGORY
        if (filters.category !== "all") {

            result = result.filter(
                (product) =>
                    product.category === filters.category
            );
        }

        // BRAND
        if (filters.brand !== "all") {

            result = result.filter(
                (product) =>
                    product.brand === filters.brand
            );
        }

        // PRICE FILTER
        if (filters.price === "under100") {

            result = result.filter(
                (product) => product.price < 100
            );
        }

        if (filters.price === "100-300") {

            result = result.filter(
                (product) =>
                    product.price >= 100 &&
                    product.price <= 300
            );
        }

        if (filters.price === "over300") {

            result = result.filter(
                (product) => product.price > 300
            );
        }

        // PRICE SORT
        if (filters.price === "low") {

            result.sort(
                (a, b) => a.price - b.price
            );
        }

        if (filters.price === "high") {

            result.sort(
                (a, b) => b.price - a.price
            );
        }

        // SORT
        if (filters.sort === "popular") {

            result.sort(
                (a, b) =>
                    b.popularity - a.popularity
            );
        }

        if (filters.sort === "rating") {

            result.sort(
                (a, b) =>
                    b.rating - a.rating
            );
        }

        return result;

    }, [search, filters]);

    return (
        <>

            <Navbar />

            <main className="products-page">

                <ProductsHero
                    search={search}
                    setSearch={setSearch}
                />

                <ProductFilters
                    filters={filters}
                    setFilters={setFilters}
                    productCount={filteredProducts.length}
                />

                <ProductGrid
                    products={filteredProducts}
                />

            </main>

            <Footer />

        </>
    );
}

export default Products;