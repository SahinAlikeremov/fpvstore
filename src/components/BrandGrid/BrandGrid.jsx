import "./BrandGrid.css";

import { useEffect, useState } from "react";

import BrandCard from "../BrandCard/BrandCard";

function BrandGrid() {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadBrands = async () => {

            try {

                const response = await fetch(
                    "http://localhost:8080/api/products"
                );

                if (!response.ok) {
                    throw new Error(
                        "Brands could not be loaded"
                    );
                }

                const products =
                    await response.json();

                const brandMap = new Map();

                products.forEach((product) => {

                    if (!product.brand) {
                        return;
                    }

                    const brandName =
                        product.brand.trim();

                    if (!brandMap.has(brandName)) {

                        brandMap.set(
                            brandName,
                            []
                        );

                    }

                    brandMap
                        .get(brandName)
                        .push(product);

                });

                const brandData =
                    Array.from(
                        brandMap.entries()
                    ).map(
                        ([name, brandProducts]) => ({
                            name,
                            products: brandProducts
                        })
                    );

                setBrands(brandData);

            } catch (error) {

                console.error(
                    "Brand loading error:",
                    error
                );

                setError(
                    "Brands could not be loaded."
                );

            } finally {

                setLoading(false);

            }
        };

        loadBrands();

    }, []);

    if (loading) {

        return (
            <section className="brand-grid">

                <div className="brand-grid-container">

                    <p>
                        Loading brands...
                    </p>

                </div>

            </section>
        );

    }

    if (error) {

        return (
            <section className="brand-grid">

                <div className="brand-grid-container">

                    <p>
                        {error}
                    </p>

                </div>

            </section>
        );

    }

    return (
        <section className="brand-grid">

            <div className="brand-grid-container">

                {brands.map((brand) => (

                    <BrandCard
                        key={brand.name}
                        brand={brand.name}
                        products={brand.products}
                    />

                ))}

            </div>

        </section>
    );
}

export default BrandGrid;