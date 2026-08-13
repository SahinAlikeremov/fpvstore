import "./UsedProductGrid.css";

import { useEffect, useState } from "react";

import UsedProductCard from "../UsedProductCard/UsedProductCard";

function UsedProductGrid() {

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

                {products.map((product) => (

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