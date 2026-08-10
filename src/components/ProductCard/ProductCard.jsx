import "./ProductCard.css";

import {
    FiHeart,
    FiShoppingCart,
    FiStar
} from "react-icons/fi";

import { useWishlist } from "../../contexts/WishlistContext";
import { useCart } from "../../contexts/CartContext";

const images = import.meta.glob(
    "../../assets/images/*",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

function ProductCard({
    id,
    image,
    badge,
    brand,
    title,
    price,
    oldPrice,
    rating,
    reviews
}) {

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();

    const {
        addToCart
    } = useCart();

    const imageName = image
        ? image.split("/").pop()
        : "";

    const imageKey = Object.keys(images).find(
        (key) => key.endsWith(`/${imageName}`)
    );

    const imagePath = imageKey
        ? images[imageKey]
        : "";

    const product = {
        id,
        image: imagePath,
        badge,
        brand,
        name: title,
        title,
        price,
        oldPrice,
        rating,
        reviews
    };

    const liked = isInWishlist(id);

    return (
        <div className="product-card">

            {badge && (
                <div className="product-badge">
                    {badge}
                </div>
            )}

            <button
                className={`wishlist-btn ${
                    liked ? "active" : ""
                }`}
                type="button"
                onClick={() =>
                    toggleWishlist(product)
                }
                aria-label="Wishlist"
            >
                <FiHeart />
            </button>

            <div className="product-image">

                <img
                    src={imagePath}
                    alt={title}
                />

            </div>

            <div className="product-content">

                <span className="product-brand">
                    {brand}
                </span>

                <h3>
                    {title}
                </h3>

                <div className="product-rating">

                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />

                    <span>
                        ({reviews})
                    </span>

                </div>

                <div className="product-price">

                    <h2>
                        ₼{price}
                    </h2>

                    {oldPrice && (
                        <span>
                            ₼{oldPrice}
                        </span>
                    )}

                </div>

                <button
                    className="cart-btn"
                    type="button"
                    onClick={() =>
                        addToCart(product)
                    }
                >
                    <FiShoppingCart />
                    Add To Cart
                </button>

            </div>

        </div>
    );
}

export default ProductCard;