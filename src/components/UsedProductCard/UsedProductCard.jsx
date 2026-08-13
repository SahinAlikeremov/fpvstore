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

import ovonic1300 from "../../assets/images/ovonic1300.png";
import ovonic1550 from "../../assets/images/ovonic1550.png";
import ovonic13002 from "../../assets/images/ovonic13002.png";
import ovonic1600 from "../../assets/images/ovonic1600.png";
import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";

const productImages = {
    "ovonic1300.png": ovonic1300,
    "ovonic1550.png": ovonic1550,
    "ovonic13002.png": ovonic13002,
    "ovonic1600.png": ovonic1600,
};

function UsedProductCard({ product }) {

    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();

    const {
        addToCart
    } = useCart();

    const imageName = product.image
        ? product.image.split("/").pop()
        : null;

    const image = productImages[imageName];

    const displayProduct = {
        ...product,
        image: image,
        name: product.title,
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
                    {displayProduct.badge}
                </div>

                <button
                    className={`used-wishlist ${
                        liked ? "active" : ""
                    }`}
                    type="button"
                    onClick={() =>
                        toggleWishlist(displayProduct)
                    }
                    aria-label="Wishlist"
                >
                    <FiHeart />
                </button>

                <div className="used-image">

                    {image && (
                        <img
                            src={image}
                            alt={displayProduct.title}
                        />
                    )}

                </div>

                <div className="used-content">

                    <h3>
                        {displayProduct.title}
                    </h3>

                    <span className="battery-grade">
                        BATTERY GRADE
                    </span>

                    <div className="used-rating">

                        {[...Array(5)].map((_, index) => (

                            <FiStar
                                key={index}
                                className={
                                    index <
                                    Math.round(
                                        displayProduct.rating
                                    )
                                        ? "active"
                                        : ""
                                }
                            />

                        ))}

                    </div>

                    <span className="battery-condition">
                        {displayProduct.condition}
                    </span>

                    <div className="used-location">

                        <FiMapPin />

                        {displayProduct.location}

                    </div>

                    <div className="used-price">

                        {displayProduct.oldPrice !== null &&
                            displayProduct.oldPrice !== undefined && (

                                <span className="old-price">
                                    ₼{displayProduct.oldPrice}
                                </span>

                            )}

                        <h2>
                            ₼{displayProduct.price}
                        </h2>

                    </div>

                    <div className="used-actions">

                        <button
                            className="used-details-btn"
                            type="button"
                            onClick={() =>
                                setIsDetailsOpen(true)
                            }
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
                    onClick={() =>
                        setIsDetailsOpen(false)
                    }
                >

                    <div
                        className="details-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <button
                            className="details-close"
                            type="button"
                            onClick={() =>
                                setIsDetailsOpen(false)
                            }
                            aria-label="Close"
                        >
                            <FiX />
                        </button>

                        <div className="details-image">

                            {image && (
                                <img
                                    src={image}
                                    alt={displayProduct.title}
                                />
                            )}

                        </div>

                        <div className="details-content">

                            <span className="details-brand">
                                {displayProduct.brand}
                            </span>

                            <h2>
                                {displayProduct.title}
                            </h2>

                            <div className="details-rating">

                                {[...Array(5)].map((_, index) => (

                                    <FiStar
                                        key={index}
                                        className={
                                            index <
                                            Math.round(
                                                displayProduct.rating
                                            )
                                                ? "active"
                                                : ""
                                        }
                                    />

                                ))}

                                <span>
                                    {displayProduct.condition}
                                </span>

                            </div>

                            <div className="details-condition">

                                <div>

                                    <span>
                                        CONDITION
                                    </span>

                                    <strong>
                                        {displayProduct.condition}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        LOCATION
                                    </span>

                                    <strong>
                                        {displayProduct.location}
                                    </strong>

                                </div>

                            </div>

                            <p className="details-description">
                                This product is available in the FPVStore Used Market and has been checked before being listed.
                            </p>

                            <div className="details-specs">

                                <div>

                                    <span>
                                        PRODUCT
                                    </span>

                                    <strong>
                                        {displayProduct.brand}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        CATEGORY
                                    </span>

                                    <strong>
                                        {displayProduct.category}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        STOCK
                                    </span>

                                    <strong>
                                        {displayProduct.stock}
                                    </strong>

                                </div>

                            </div>

                            <div className="details-bottom">

                                <div className="details-price">

                                    {displayProduct.oldPrice !== null &&
                                        displayProduct.oldPrice !== undefined && (

                                            <span>
                                                ₼{displayProduct.oldPrice}
                                            </span>

                                        )}

                                    <strong>
                                        ₼{displayProduct.price}
                                    </strong>

                                </div>

                                <button
                                    className="details-cart-btn"
                                    type="button"
                                    onClick={() => {

                                        addToCart(
                                            displayProduct
                                        );

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