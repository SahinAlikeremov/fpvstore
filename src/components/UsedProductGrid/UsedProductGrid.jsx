import "./UsedProductGrid.css";

import { useEffect, useMemo, useState } from "react";

import UsedProductCard from "../UsedProductCard/UsedProductCard";

function UsedProductGrid({
    filters
}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetch("http://localhost:8080/api/products/used")

            .then((response) => {

                if (!response.ok) {

                    throw new Error(
                        "Used products could not be loaded"
                    );

                }

                return response.json();

            })

            .then((data) => {

                setProducts(data);
                setLoading(false);

            })

            .catch((error) => {

                console.error(
                    "Used products error:",
                    error
                );

                setLoading(false);

            });

    }, []);


    const filteredProducts = useMemo(() => {

        let result = [...products];


        if (filters.category !== "all") {

            result = result.filter(
                (product) =>
                    product.category ===
                    filters.category
            );

        }


        if (filters.brand !== "all") {

            result = result.filter(
                (product) =>
                    product.brand ===
                    filters.brand
            );

        }


        if (filters.condition !== "all") {

            result = result.filter(
                (product) =>
                    product.condition ===
                    filters.condition
            );

        }


        if (filters.price === "0-100") {

            result = result.filter(
                (product) =>
                    product.price >= 0 &&
                    product.price < 100
            );

        }


        if (filters.price === "100-300") {

            result = result.filter(
                (product) =>
                    product.price >= 100 &&
                    product.price <= 300
            );

        }


        if (filters.price === "300-700") {

            result = result.filter(
                (product) =>
                    product.price > 300 &&
                    product.price <= 700
            );

        }


        if (filters.price === "700+") {

            result = result.filter(
                (product) =>
                    product.price > 700
            );

        }


        if (filters.sort === "newest") {

            result.sort(
                (a, b) =>
                    b.id - a.id
            );

        }


        if (filters.sort === "oldest") {

            result.sort(
                (a, b) =>
                    a.id - b.id
            );

        }


        if (filters.sort === "low") {

            result.sort(
                (a, b) =>
                    a.price - b.price
            );

        }


        if (filters.sort === "high") {

            result.sort(
                (a, b) =>
                    b.price - a.price
            );

        }


        return result;

    }, [products, filters]);


    if (loading) {

        return (
            <section className="used-grid">

                <div className="used-grid-container">

                    <p>
                        Loading used products...
                    </p>

                </div>

            </section>
        );

    }


    return (
        <section className="used-grid">

            <div className="used-grid-container">

                {filteredProducts.map((product) => (

                    <UsedProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </section>
    );
}

export default UsedProductGrid;