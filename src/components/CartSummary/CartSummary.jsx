import "./CartSummary.css";

import { FiArrowRight } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartSummary() {

    const navigate = useNavigate();

    const {
        cartItems,
        totalItems,
        subtotal,
        clearCart
    } = useCart();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleWhatsAppOrder = async () => {

        if (cartItems.length === 0 || loading) {
            return;
        }

        setMessage("");
        setMessageType("");
        setLoading(true);

        const whatsappWindow = window.open(
            "",
            "_blank"
        );

        try {

            const response = await fetch(
                "http://localhost:8080/api/orders",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        totalAmount: subtotal,

                        address: "To be confirmed via WhatsApp",

                        phone: "To be confirmed via WhatsApp",

                        items: cartItems.map((item) => ({
                            productId: Number(item.id),
                            productName: item.name,
                            price: item.price,
                            quantity: item.quantity
                        }))
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                if (whatsappWindow) {
                    whatsappWindow.close();
                }

                if (response.status === 401) {

                    setMessage(
                        "Please log in before placing an order."
                    );

                    setMessageType("error");

                    setLoading(false);

                    setTimeout(() => {
                        navigate("/login");
                    }, 1200);

                    return;
                }

                setMessage(
                    data.message ||
                    "Order could not be created."
                );

                setMessageType("error");

                setLoading(false);

                return;
            }

            const orderId = data.id;

            const itemsText = cartItems
                .map((item) =>
                    `• ${item.name} x${item.quantity} — ₼${item.price * item.quantity}`
                )
                .join("\n");

            const messageText = `
Hello FPVStore! I would like to place an order.

Order #${orderId}

ORDER:
${itemsText}

Total Items: ${totalItems}
Total: ₼${subtotal}

Please let me know the next steps.
            `.trim();

            const phoneNumber =
                "994707991070";

            const whatsappUrl =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    messageText
                )}`;

            if (whatsappWindow) {

                whatsappWindow.location.href =
                    whatsappUrl;

            } else {

                window.open(
                    whatsappUrl,
                    "_blank"
                );
            }

            clearCart();

            setMessage(
                `Order #${orderId} created successfully.`
            );

            setMessageType("success");

        } catch (error) {

            console.error(
                "WhatsApp order error:",
                error
            );

            if (whatsappWindow) {
                whatsappWindow.close();
            }

            setMessage(
                "Cannot connect to the server."
            );

            setMessageType("error");

        } finally {

            setLoading(false);

        }
    };

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

                        <span>
                            Items
                        </span>

                        <strong>
                            {totalItems}
                        </strong>

                    </div>

                    <div className="cart-summary-row">

                        <span>
                            Subtotal
                        </span>

                        <strong>
                            ₼{subtotal}
                        </strong>

                    </div>

                    <div className="cart-summary-divider"></div>

                    <div className="cart-summary-total">

                        <span>
                            Total
                        </span>

                        <strong>
                            ₼{subtotal}
                        </strong>

                    </div>

                    <button
                        className="cart-summary-button"
                        type="button"
                        disabled={
                            totalItems === 0 ||
                            loading
                        }
                        onClick={handleWhatsAppOrder}
                    >

                        {loading
                            ? "CREATING ORDER..."
                            : "ORDER VIA WHATSAPP"}

                        <FiArrowRight />

                    </button>

                    {message && (

                        <div
                            className={`cart-order-message ${messageType}`}
                        >
                            {message}
                        </div>

                    )}

                </div>

            </div>

        </section>
    );
}

export default CartSummary;