import "./FeaturedProducts.css";

import { useEffect, useState } from "react";

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";

import ovonic1300 from "../../assets/images/ovonic1300.png";
import ovonic1300pc2 from "../../assets/images/ovonic1300pc2.png";
import ovonic1600 from "../../assets/images/ovonic1600.png";
import ovonic1550 from "../../assets/images/ovonic1550.png";
import ovonic1480 from "../../assets/images/ovonic1480.png";
import ovonic13002 from "../../assets/images/ovonic13002.png";  


const productImages = {

    "ovonic1300.png": ovonic1300,

    "ovonic1300pc2.png": ovonic1300pc2,

    "ovonic1600.png": ovonic1600,

    "ovonic1550.png": ovonic1550,

    "ovonic1480.png": ovonic1480,
    "ovonic13002.png": ovonic13002

};


function FeaturedProducts() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);


    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();


    const {
        addToCart
    } = useCart();


    useEffect(() => {

        fetch("http://localhost:8080/api/products")

            .then((response) => {

                if (!response.ok) {

                    throw new Error(
                        "Products could not be loaded"
                    );

                }

                return response.json();

            })

            .then((data) => {

                console.log("ALL PRODUCTS:", data);


                const ovonicProducts = data

                    .filter((product) =>

                        product.brand &&

                        product.brand
                            .toLowerCase()
                            .trim() === "ovonic"

                    )

                    .slice(0, 8);


                console.log(
                    "OVONIC PRODUCTS:",
                    ovonicProducts
                );


                setProducts(ovonicProducts);

                setLoading(false);

            })

            .catch((error) => {

                console.error(
                    "PRODUCT ERROR:",
                    error
                );

                setLoading(false);

            });

    }, []);


    if (loading) {

        return (

            <div className="featured-container">

                <div className="section-title">

                    <h2>
                        FEATURED BATTERIES
                    </h2>

                    <span></span>

                </div>


                <p>
                    Loading products...
                </p>

            </div>

        );

    }


    return (

        <div className="featured-container">

            <div className="section-title">

                <h2>
                    FEATURED BATTERIES
                </h2>

                <span></span>

            </div>


            <div className="products-grid">

                {products.map((product) => {

                    const liked =
                        isInWishlist(product.id);


                    const imageName =
                        product.image
                            ? product.image
                                .split("/")
                                .pop()
                            : null;


                    const image =
                        productImages[imageName];


                    const wishlistProduct = {

                        id: product.id,

                        image: image,

                        brand: product.brand,

                        name: product.title,

                        title: product.title,

                        price: product.price,

                        oldPrice: product.oldPrice,

                        rating: product.rating,

                        reviews: product.reviews,

                        badge: product.badge

                    };


                    return (

                        <div
                            className="product-card"
                            key={product.id}
                        >

                            {product.badge && (

                                <div className="discount">

                                    {product.badge}

                                </div>

                            )}


                            <button

                                className={`wishlist-btn ${
                                    liked
                                        ? "active"
                                        : ""
                                }`}

                                type="button"

                                onClick={() =>
                                    toggleWishlist(
                                        wishlistProduct
                                    )
                                }

                                aria-label="Wishlist"

                            >

                                <FiHeart />

                            </button>


                            {image && (

                                <img
                                    src={image}
                                    alt={product.title}
                                />

                            )}


                            <h3>
                                {product.title}
                            </h3>


                            <div className="battery-condition">

                                <small>
                                    Battery Grade
                                </small>


                                <div className="stars">

                                    {[...Array(5)].map(
                                        (_, i) => (

                                            <FaStar

                                                key={i}

                                                className={
                                                    i <
                                                    Math.round(
                                                        product.rating
                                                    )

                                                        ? "star active"

                                                        : "star"
                                                }

                                            />

                                        )
                                    )}

                                </div>


                                <span>
                                    {product.condition}
                                </span>

                            </div>


                            <div className="prices">

                                {product.oldPrice !== null &&
                                 product.oldPrice !== undefined && (

                                    <span className="old-price">

                                        ₼{product.oldPrice}

                                    </span>

                                )}


                                <span className="price">

                                    ₼{product.price}

                                </span>

                            </div>


                            <div className="product-actions">

                                <button

                                    type="button"

                                    onClick={() =>
                                        addToCart(
                                            wishlistProduct
                                        )
                                    }

                                    aria-label="Add to cart"

                                >

                                    <FiShoppingCart />

                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}


export default FeaturedProducts;