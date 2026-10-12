import "./CartItems.css";

import {
    FiMinus,
    FiPlus,
    FiTrash2,
} from "react-icons/fi";

import { useCart } from "../../contexts/CartContext";

function CartItems() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <section className="cart-items-section">
                <div className="cart-items-container">

                    <div className="cart-items-header">
                        <div>
                            <span className="cart-section-tag">
                                YOUR PRODUCTS
                            </span>

                            <h2>
                                SHOPPING <span>CART</span>
                            </h2>
                        </div>

                        <span className="cart-items-count">
                            0 ITEMS
                        </span>
                    </div>

                    <div className="cart-empty">
                        <h3>Your cart is empty</h3>

                        <p>
                            Add some FPV products to your cart and they will appear here.
                        </p>
                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="cart-items-section">

            <div className="cart-items-container">

                <div className="cart-items-header">

                    <div>
                        <span className="cart-section-tag">
                            YOUR PRODUCTS
                        </span>

                        <h2>
                            SHOPPING <span>CART</span>
                        </h2>
                    </div>

                    <span className="cart-items-count">
                        {cartItems.length} ITEMS
                    </span>

                </div>


                <div className="cart-items-list">

                    {cartItems.map((item) => (

                        <div
                            className="cart-item"
                            key={item.id}
                        >

                            <div className="cart-item-image">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                            </div>


                            <div className="cart-item-info">

                                <h3>
                                    {item.name}
                                </h3>

                                <span>
                                    FPV BATTERY
                                </span>

                            </div>


                            <div className="cart-item-price">
                                ₼{item.price}
                            </div>


                            <div className="cart-item-quantity">

                                <button
                                    type="button"
                                    onClick={() =>
                                        decreaseQuantity(item.id)
                                    }
                                >
                                    <FiMinus />
                                </button>

                                <span>
                                    {item.quantity}
                                </span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        increaseQuantity(item.id)
                                    }
                                >
                                    <FiPlus />
                                </button>

                            </div>


                            <div className="cart-item-total">
                                ₼{item.price * item.quantity}
                            </div>


                            <button
                                className="cart-remove"
                                type="button"
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                                aria-label={`Remove ${item.name}`}
                            >
                                <FiTrash2 />
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default CartItems;