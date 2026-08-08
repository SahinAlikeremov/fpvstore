import "./CartSummary.css";

import { FiArrowRight } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";

function CartSummary() {
    const { totalItems, subtotal } = useCart();

    return (
        <section className="cart-summary-section">
            <div className="cart-summary-container">

                <div className="cart-summary-content">

                    <span className="cart-summary-tag">
                        ORDER SUMMARY
                    </span>

                    <h2>
                        CART <span>SUMMARY</span>
                    </h2>

                    <p>
                        Review your order before contacting us on WhatsApp.
                    </p>

                </div>

                <div className="cart-summary-box">

                    <div className="cart-summary-row">
                        <span>Items</span>
                        <strong>{totalItems}</strong>
                    </div>

                    <div className="cart-summary-row">
                        <span>Subtotal</span>
                        <strong>₼{subtotal}</strong>
                    </div>

                    <div className="cart-summary-divider"></div>

                    <div className="cart-summary-total">
                        <span>Total</span>
                        <strong>₼{subtotal}</strong>
                    </div>

                    <button
                        className="cart-summary-button"
                        type="button"
                        disabled={totalItems === 0}
                    >
                        ORDER VIA WHATSAPP
                        <FiArrowRight />
                    </button>

                </div>

            </div>
        </section>
    );
}

export default CartSummary;