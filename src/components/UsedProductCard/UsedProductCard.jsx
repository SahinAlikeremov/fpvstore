import "./UsedProductCard.css";

import {
    FiHeart,
    FiMapPin,
    FiEye,
    FiStar,
    FiX,
    FiShoppingCart
} from "react-icons/fi";

import { useEffect, useState } from "react";

import batteryImage from "../../assets/images/ovonic1300.png";

import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";

function UsedProductCard() {

    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();

    const {
        addToCart
    } = useCart();

    const product = {
        id: "used-ovonic-1300",
        image: batteryImage,
        badge: "Like New",
        brand: "Ovonic",
        title: "Ovonic 1300mAh",
        name: "Ovonic 1300mAh",
        price: 59,
        oldPrice: 69,
        condition: "Brand New",
        location: "Baku"
    };

    const liked = isInWishlist(product.id);

    useEffect(() => {

        if (isDetailsOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };

    }, [isDetailsOpen]);

    return (
        <>
            <div className="used-product-card">

                <div className="used-badge">
                    {product.badge}
                </div>

                <button
                    className={`used-wishlist ${liked ? "active" : ""}`}
                    type="button"
                    onClick={() => toggleWishlist(product)}
                    aria-label="Wishlist"
                >
                    <FiHeart />
                </button>

                <div className="used-image">

                    <img
                        src={product.image}
                        alt={product.title}
                    />

                </div>

                <div className="used-content">

                    <h3>
                        {product.title}
                    </h3>

                    <span className="battery-grade">
                        BATTERY GRADE
                    </span>

                    <div className="used-rating">

                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />

                    </div>

                    <span className="battery-condition">
                        {product.condition}
                    </span>

                    <div className="used-location">

                        <FiMapPin />

                        {product.location}

                    </div>

                    <div className="used-price">

                        <span className="old-price">
                            ₼{product.oldPrice}
                        </span>

                        <h2>
                            ₼{product.price}
                        </h2>

                    </div>

                    <div className="used-actions">

                        <button
                            className="used-details-btn"
                            type="button"
                            onClick={() => setIsDetailsOpen(true)}
                        >
                            <FiEye />
                            View Details
                        </button>

                    </div>

                </div>

            </div>

            {isDetailsOpen && (
                <div
                    className="details-overlay"
                    onClick={() => setIsDetailsOpen(false)}
                >

                    <div
                        className="details-modal"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <button
                            className="details-close"
                            type="button"
                            onClick={() => setIsDetailsOpen(false)}
                            aria-label="Close"
                        >
                            <FiX />
                        </button>

                        <div className="details-image">

                            <img
                                src={product.image}
                                alt={product.title}
                            />

                        </div>

                        <div className="details-content">

                            <span className="details-brand">
                                {product.brand}
                            </span>

                            <h2>
                                {product.title}
                            </h2>

                            <div className="details-rating">

                                <FiStar />
                                <FiStar />
                                <FiStar />
                                <FiStar />
                                <FiStar />

                                <span>
                                    Excellent condition
                                </span>

                            </div>

                            <div className="details-condition">

                                <div>

                                    <span>
                                        CONDITION
                                    </span>

                                    <strong>
                                        {product.condition}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        LOCATION
                                    </span>

                                    <strong>
                                        {product.location}
                                    </strong>

                                </div>

                            </div>

                            <p className="details-description">
                                This battery is in excellent condition and ready for FPV use.
                                It has been carefully checked and is suitable for FPV pilots.
                            </p>

                            <div className="details-specs">

                                <div>

                                    <span>
                                        CAPACITY
                                    </span>

                                    <strong>
                                        1300mAh
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        VOLTAGE
                                    </span>

                                    <strong>
                                        6S
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        DISCHARGE
                                    </span>

                                    <strong>
                                        100C
                                    </strong>

                                </div>

                            </div>

                            <div className="details-bottom">

                                <div className="details-price">

                                    <span>
                                        ₼{product.oldPrice}
                                    </span>

                                    <strong>
                                        ₼{product.price}
                                    </strong>

                                </div>

                                <button
                                    className="details-cart-btn"
                                    type="button"
                                    onClick={() => {
                                        addToCart(product);
                                        setIsDetailsOpen(false);
                                    }}
                                >
                                    <FiShoppingCart />
                                    Add To Cart
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            )}

        </>
    );
}

export default UsedProductCard;