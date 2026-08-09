import "./Wishlist.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";

import { useWishlist } from "../../contexts/WishlistContext";

function Wishlist() {

    const {
        wishlist,
        removeFromWishlist
    } = useWishlist();

    return (

        <>

            <Navbar />

            <main className="wishlist-page">

                <div className="wishlist-container">

                    <div className="wishlist-header">

                        <div>

                            <span className="wishlist-label">
                                YOUR FAVORITES
                            </span>

                            <h1>
                                MY <span>WISHLIST</span>
                            </h1>

                            <p>
                                Products you've saved for later.
                            </p>

                        </div>

                        <div className="wishlist-count">
                            {wishlist.length} ITEMS
                        </div>

                    </div>


                    {wishlist.length === 0 ? (

                        <div className="wishlist-empty">

                            <div className="wishlist-empty-icon">
                                <FiHeart />
                            </div>

                            <h2>
                                Your wishlist is empty
                            </h2>

                            <p>
                                Save your favorite FPV products here
                                and find them easily later.
                            </p>

                        </div>

                    ) : (

                        <div className="wishlist-grid">

                            {wishlist.map((product) => (

                                <div
                                    className="wishlist-card"
                                    key={product.id}
                                >

                                    {product.badge && (
                                        <div className="wishlist-badge">
                                            {product.badge}
                                        </div>
                                    )}

                                    <button
                                        className="wishlist-remove"
                                        type="button"
                                        onClick={() =>
                                            removeFromWishlist(product.id)
                                        }
                                        aria-label="Remove from wishlist"
                                    >
                                        <FiTrash2 />
                                    </button>


                                    <div className="wishlist-image">

                                        <img
                                            src={product.image}
                                            alt={product.title}
                                        />

                                    </div>


                                    <div className="wishlist-content">

                                        <span className="wishlist-brand">
                                            {product.brand}
                                        </span>

                                        <h3>
                                            {product.title}
                                        </h3>


                                        <div className="wishlist-price">

                                            <strong>
                                                ₼{product.price}
                                            </strong>

                                            {product.oldPrice && (
                                                <span>
                                                    ₼{product.oldPrice}
                                                </span>
                                            )}

                                        </div>


                                        <div className="wishlist-actions">

                                            <button
                                                type="button"
                                                className="wishlist-cart-btn"
                                            >
                                                <FiShoppingCart />
                                                Add To Cart
                                            </button>

                                            <button
                                                type="button"
                                                className="wishlist-heart-btn"
                                                onClick={() =>
                                                    removeFromWishlist(
                                                        product.id
                                                    )
                                                }
                                            >
                                                <FiHeart />
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </main>

            <Footer />

        </>

    );
}

export default Wishlist;