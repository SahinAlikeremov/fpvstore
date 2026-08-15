import "./Products.css";

import {
    useEffect,
    useMemo,
    useState
} from "react";

import {
    useSearchParams
} from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ProductsHero from "../../components/ProductsHero/ProductsHero";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

function Products() {

    const [searchParams] = useSearchParams();

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [filters, setFilters] = useState({
        category: "all",
        brand: "all",
        price: "all",
        sort: "newest"
    });

    useEffect(() => {

        const categoryFromUrl =
            searchParams.get("category");

        const brandFromUrl =
            searchParams.get("brand");

        setFilters((currentFilters) => ({
            ...currentFilters,

            category:
                categoryFromUrl ||
                "all",

            brand:
                brandFromUrl ||
                "all"
        }));

    }, [searchParams]);

    useEffect(() => {

        fetch(
            "http://localhost:8080/api/products"
        )
            .then((response) => {

                if (!response.ok) {

                    throw new Error(
                        "Products could not be loaded"
                    );

                }

                return response.json();

            })
            .then((data) => {

                setProducts(data);
                setLoading(false);

            })
            .catch((error) => {

                console.error(error);

                setError(
                    "Products could not be loaded."
                );

                setLoading(false);

            });

    }, []);

    const filteredProducts = useMemo(() => {

        let result = [...products];

        if (search.trim()) {

            const searchValue =
                search
                    .toLowerCase()
                    .trim();

            result = result.filter(
                (product) =>
                    product.title
                        .toLowerCase()
                        .includes(searchValue) ||

                    product.brand
                        .toLowerCase()
                        .includes(searchValue) ||

                    product.category
                        .toLowerCase()
                        .includes(searchValue)
            );

        }

        if (
            filters.category !== "all"
        ) {

            result = result.filter(
                (product) =>
                    product.category ===
                    filters.category
            );

        }

        if (
            filters.brand !== "all"
        ) {

            result = result.filter(
                (product) =>
                    product.brand ===
                    filters.brand
            );

        }

        if (
            filters.price === "under100"
        ) {

            result = result.filter(
                (product) =>
                    product.price < 100
            );

        }

        if (
            filters.price === "100-300"
        ) {

            result = result.filter(
                (product) =>
                    product.price >= 100 &&
                    product.price <= 300
            );

        }

        if (
            filters.price === "over300"
        ) {

            result = result.filter(
                (product) =>
                    product.price > 300
            );

        }

        if (
            filters.price === "low"
        ) {

            result.sort(
                (a, b) =>
                    a.price - b.price
            );

        }

        if (
            filters.price === "high"
        ) {

            result.sort(
                (a, b) =>
                    b.price - a.price
            );

        }

        if (
            filters.sort === "popular"
        ) {

            result.sort(
                (a, b) =>
                    b.popularity -
                    a.popularity
            );

        }

        if (
            filters.sort === "rating"
        ) {

            result.sort(
                (a, b) =>
                    b.rating -
                    a.rating
            );

        }

        return result;

    }, [
        products,
        search,
        filters
    ]);

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
                    productCount={
                        filteredProducts.length
                    }
                />

                {loading && (

                    <p>
                        Loading products...
                    </p>

                )}

                {error && (

                    <p>
                        {error}
                    </p>

                )}

                {!loading &&
                    !error && (

                        <ProductGrid
                            products={
                                filteredProducts
                            }
                        />

                    )}

            </main>

            <Footer />
        </>
    );
}

export default Products;