import "./FeaturedProducts.css";

import ovonic1300 from "../../assets/images/ovonic1300.png";
import ovonic1300pc2 from "../../assets/images/ovonic1300pc2.png";
import ovonic1600 from "../../assets/images/ovonic1600.png";
import tattu1480 from "../../assets/images/tattu1480.png";
import boslipo from "../../assets/images/boslipo6s.png";
import ovonic1550 from "../../assets/images/ovonic1550.png";

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";

const products = [
    {
        id: "featured-ovonic-1300",
        name: "Ovonic 1300mAh",
        image: ovonic1300,
        price: 59,
        oldPrice: 69,
        discount: "-15%",
        condition: "Brand New",
        stars: 4,
    },
    {
        id: "featured-ovonic-1300-2pcs",
        name: "Ovonic 1300mAh 2PCS",
        image: ovonic1300pc2,
        price: 100,
        oldPrice: 110,
        discount: "-9%",
        condition: "Brand New",
        stars: 4,
    },
    {
        id: "featured-ovonic-1600",
        name: "Ovonic 1600mAh",
        image: ovonic1600,
        price: 79,
        oldPrice: 99,
        discount: "-20%",
        condition: "Excellent",
        stars: 4,
    },
    {
        id: "featured-tattu-1480",
        name: "Tattu 1480mAh",
        image: tattu1480,
        price: 149,
        oldPrice: 174,
        discount: "-14%",
        condition: "Brand New",
        stars: 5,
    },
    {
        id: "featured-boslipo-1550",
        name: "BosLipo 1550mAh",
        image: boslipo,
        price: 139,
        oldPrice: 159,
        discount: "-13%",
        condition: "Excellent",
        stars: 5,
    },
    {
        id: "featured-ovonic-1550",
        name: "Ovonic 1550mAh",
        image: ovonic1550,
        price: 69,
        oldPrice: 79,
        discount: "-13%",
        condition: "Good",
        stars: 4,
    },
];

function FeaturedProducts() {

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();

    const {
        addToCart
    } = useCart();

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

                    const liked = isInWishlist(product.id);

                    const wishlistProduct = {
                        id: product.id,
                        image: product.image,
                        brand: "FPVStore",

                        /* Cart'ın kullandığı isim */
                        name: product.name,

                        /* Wishlist/ProductCard uyumluluğu */
                        title: product.name,

                        price: product.price,
                        oldPrice: product.oldPrice,
                        badge: product.discount
                    };

                    return (

                        <div
                            className="product-card"
                            key={product.id}
                        >

                            <div className="discount">
                                {product.discount}
                            </div>

                            <button
                                className={`wishlist-btn ${
                                    liked ? "active" : ""
                                }`}
                                type="button"
                                onClick={() =>
                                    toggleWishlist(wishlistProduct)
                                }
                                aria-label="Wishlist"
                            >
                                <FiHeart />
                            </button>

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            <h3>
                                {product.name}
                            </h3>

                            <div className="battery-condition">

                                <small>
                                    Battery Grade
                                </small>

                                <div className="stars">

                                    {[...Array(5)].map((_, i) => (

                                        <FaStar
                                            key={i}
                                            className={
                                                i < product.stars
                                                    ? "star active"
                                                    : "star"
                                            }
                                        />

                                    ))}

                                </div>

                                <span>
                                    {product.condition}
                                </span>

                            </div>

                            <div className="prices">

                                <span className="old-price">
                                    ₼{product.oldPrice}
                                </span>

                                <span className="price">
                                    ₼{product.price}
                                </span>

                            </div>

                            <div className="product-actions">

                                <button
                                    type="button"
                                    onClick={() =>
                                        addToCart(wishlistProduct)
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