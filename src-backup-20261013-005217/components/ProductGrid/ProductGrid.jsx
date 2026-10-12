import "./ProductGrid.css";

import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ products }) {

    return (

        <div className="grid">

            {products.map((product) => (

                <ProductCard
                    key={product.id}

                    id={product.id}

                    image={product.image}

                    badge={product.badge}

                    brand={product.brand}

                    title={product.title}

                    price={product.price}

                    oldPrice={product.oldPrice}

                    rating={product.rating}

                    reviews={product.reviews}
                />

            ))}

        </div>

    );
}

export default ProductGrid;