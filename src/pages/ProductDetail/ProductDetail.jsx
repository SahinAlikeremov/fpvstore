import "./ProductDetail.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    FiHeart,
    FiShoppingCart,
    FiStar,
    FiMinus,
    FiPlus,
    FiArrowLeft
} from "react-icons/fi";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

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

function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [quantity, setQuantity] = useState(1);

    const {
        toggleWishlist,
        isInWishlist
    } = useWishlist();

    const {
        addToCart
    } = useCart();

    useEffect(() => {

        setLoading(true);
        setError("");

        fetch(`http://localhost:8080/api/products/${id}`)

            .then((response) => {

                if (!response.ok) {
                    throw new Error(
                        "Product could not be loaded"
                    );
                }

                return response.json();

            })

            .then((data) => {

                setProduct(data);
                setLoading(false);

            })

            .catch((error) => {

                console.error(
                    "Product detail error:",
                    error
                );

                setError(
                    "Product could not be loaded."
                );

                setLoading(false);

            });

    }, [id]);


    if (loading) {

        return (
            <>
                <Navbar />

                <main className="product-detail-page">

                    <div className="product-detail-loading">
                        Loading product...
                    </div>

                </main>

                <Footer />
            </>
        );

    }


    if (error || !product) {

        return (
            <>
                <Navbar />

                <main className="product-detail-page">

                    <div className="product-detail-error">

                        <h2>
                            Product not found
                        </h2>

                        <p>
                            {error}
                        </p>

                    </div>

                </main>

                <Footer />
            </>
        );

    }


    const imageName = product.image
        ? product.image.split("/").pop()
        : "";

    const imageKey = Object.keys(images).find(
        (key) => key.endsWith(`/${imageName}`)
    );

    const imagePath = imageKey
        ? images[imageKey]
        : "";


    const liked = isInWishlist(product.id);


    const cartProduct = {
        id: product.id,
        image: imagePath,
        badge: product.badge,
        brand: product.brand,
        name: product.title,
        title: product.title,
        price: product.price,
        oldPrice: product.oldPrice,
        rating: product.rating,
        reviews: product.reviews,
        stock: product.stock
    };


    const increaseQuantity = () => {

        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }

    };


    const decreaseQuantity = () => {

        if (quantity > 1) {
            setQuantity(quantity - 1);
        }

    };


    const handleAddToCart = () => {

        for (let i = 0; i < quantity; i++) {
            addToCart(cartProduct);
        }

    };


    return (
        <>
            <Navbar />

            <main className="product-detail-page">

                <div className="product-detail-container">

                    <button
                        className="back-button"
                        type="button"
                        onClick={() => window.history.back()}
                    >
                        <FiArrowLeft />
                        Back
                    </button>


                    <div className="product-detail-card">

                        <div className="product-detail-image-section">

                            {product.badge && (
                                <div className="detail-badge">
                                    {product.badge}
                                </div>
                            )}

                            <button
                                className={`detail-wishlist ${
                                    liked ? "active" : ""
                                }`}
                                type="button"
                                onClick={() =>
                                    toggleWishlist(cartProduct)
                                }
                                aria-label="Wishlist"
                            >
                                <FiHeart />
                            </button>

                            <div className="product-detail-image">

                                <img
                                    src={imagePath}
                                    alt={product.title}
                                />

                            </div>

                        </div>


                        <div className="product-detail-content">

                            <span className="detail-brand">
                                {product.brand}
                            </span>

                            <h1>
                                {product.title}
                            </h1>


                            <div className="detail-rating">

                                <div className="detail-stars">

                                    {[...Array(5)].map(
                                        (_, index) => (

                                            <FiStar
                                                key={index}
                                                className={
                                                    index <
                                                    Math.round(
                                                        product.rating
                                                    )
                                                        ? "active"
                                                        : ""
                                                }
                                            />

                                        )
                                    )}

                                </div>

                                <span>
                                    {product.rating}
                                </span>

                                <span>
                                    ({product.reviews} reviews)
                                </span>

                            </div>


                            <div className="detail-price">

                                <strong>
                                    ₼{product.price}
                                </strong>

                                {product.oldPrice !== null &&
                                    product.oldPrice !== undefined && (

                                        <span>
                                            ₼{product.oldPrice}
                                        </span>

                                    )}

                            </div>


                            <div className="detail-stock">

                                {product.stock > 0 ? (

                                    <span className="in-stock">
                                        In Stock ({product.stock})
                                    </span>

                                ) : (

                                    <span className="out-stock">
                                        Out of Stock
                                    </span>

                                )}

                            </div>


                            <div className="detail-info-grid">

                                <div>

                                    <span>
                                        BRAND
                                    </span>

                                    <strong>
                                        {product.brand}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        CATEGORY
                                    </span>

                                    <strong>
                                        {product.category}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        CONDITION
                                    </span>

                                    <strong>
                                        {product.condition}
                                    </strong>

                                </div>

                            </div>


                            <div className="detail-actions">

                                <div className="quantity-control">

                                    <button
                                        type="button"
                                        onClick={
                                            decreaseQuantity
                                        }
                                    >
                                        <FiMinus />
                                    </button>

                                    <span>
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={
                                            increaseQuantity
                                        }
                                        disabled={
                                            quantity >=
                                            product.stock
                                        }
                                    >
                                        <FiPlus />
                                    </button>

                                </div>


                                <button
                                    className="detail-cart-button"
                                    type="button"
                                    onClick={
                                        handleAddToCart
                                    }
                                    disabled={
                                        product.stock <= 0
                                    }
                                >
                                    <FiShoppingCart />
                                    Add To Cart
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default ProductDetail;