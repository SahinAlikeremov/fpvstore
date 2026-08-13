import "./Account.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FiUser,
    FiMail,
    FiPackage,
    FiHeart,
    FiLogOut,
    FiX,
    FiMapPin,
    FiPhone
} from "react-icons/fi";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useWishlist } from "../../contexts/WishlistContext";

function Account() {

    const navigate = useNavigate();

    const {
        wishlist
    } = useWishlist();

    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedOrderItems, setSelectedOrderItems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [ordersLoading, setOrdersLoading] = useState(true);

    const [orderLoading, setOrderLoading] = useState(false);
    const [orderError, setOrderError] = useState("");

    const [error, setError] = useState("");

    const modalOpen =
        Boolean(selectedOrder) ||
        orderLoading ||
        Boolean(orderError);

    useEffect(() => {

        const loadAccount = async () => {

            try {

                const userResponse = await fetch(
                    "http://localhost:8080/api/auth/me",
                    {
                        credentials: "include"
                    }
                );

                if (!userResponse.ok) {

                    navigate("/login");

                    return;
                }

                const userData =
                    await userResponse.json();

                setUser(userData);

                const ordersResponse = await fetch(
                    "http://localhost:8080/api/orders",
                    {
                        credentials: "include"
                    }
                );

                if (ordersResponse.ok) {

                    const ordersData =
                        await ordersResponse.json();

                    setOrders(
                        Array.isArray(ordersData)
                            ? ordersData
                            : []
                    );

                } else {

                    setOrders([]);

                }

            } catch (error) {

                console.error(error);

                setError(
                    "Could not load your account."
                );

            } finally {

                setLoading(false);
                setOrdersLoading(false);

            }
        };

        loadAccount();

    }, [navigate]);

    useEffect(() => {

        if (!modalOpen) {

            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";

            return;
        }

        const scrollbarWidth =
            window.innerWidth -
            document.documentElement.clientWidth;

        document.documentElement.style.overflow =
            "hidden";

        document.body.style.overflow =
            "hidden";

        document.body.style.paddingRight =
            scrollbarWidth > 0
                ? `${scrollbarWidth}px`
                : "";

        const handleKeyDown = (event) => {

            if (
                event.key === "Escape" &&
                selectedOrder
            ) {
                closeOrderModal();
            }

        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {

            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [
        modalOpen,
        selectedOrder
    ]);

    const handleLogout = async () => {

        try {

            await fetch(
                "http://localhost:8080/api/auth/logout",
                {
                    method: "POST",
                    credentials: "include"
                }
            );

        } catch (error) {

            console.error(error);

        }

        navigate("/");

    };

    const handleOrderClick = async (orderId) => {

        setOrderLoading(true);
        setOrderError("");
        setSelectedOrder(null);
        setSelectedOrderItems([]);

        try {

            const response = await fetch(
                `http://localhost:8080/api/orders/${orderId}`,
                {
                    method: "GET",
                    credentials: "include"
                }
            );

            if (!response.ok) {

                const errorData =
                    await response
                        .json()
                        .catch(() => null);

                setOrderError(
                    errorData?.message ||
                    "Could not load order details."
                );

                return;
            }

            const data =
                await response.json();

            if (!data || !data.order) {

                setOrderError(
                    "Invalid order data received."
                );

                return;
            }

            setSelectedOrder(data.order);

            setSelectedOrderItems(
                Array.isArray(data.items)
                    ? data.items
                    : []
            );

        } catch (error) {

            console.error(
                "Order details error:",
                error
            );

            setOrderError(
                "Could not connect to the server."
            );

        } finally {

            setOrderLoading(false);

        }
    };

    const closeOrderModal = () => {

        setSelectedOrder(null);
        setSelectedOrderItems([]);
        setOrderError("");
        setOrderLoading(false);

    };

    if (loading) {

        return (
            <>
                <Navbar />

                <main className="account-page">

                    <div className="account-loading">
                        Loading account...
                    </div>

                </main>

                <Footer />
            </>
        );

    }

    if (error) {

        return (
            <>
                <Navbar />

                <main className="account-page">

                    <div className="account-error">
                        {error}
                    </div>

                </main>

                <Footer />
            </>
        );

    }

    return (
        <>
            <Navbar />

            <main className="account-page">

                <div className="account-container">

                    <div className="account-header">

                        <span>
                            MY ACCOUNT
                        </span>

                        <h1>
                            WELCOME BACK,{" "}
                            <strong>
                                {user.username}
                            </strong>
                        </h1>

                        <p>
                            Manage your FPVStore account and orders.
                        </p>

                    </div>

                    <div className="account-grid">

                        <div className="account-card">

                            <div className="account-card-icon">
                                <FiUser />
                            </div>

                            <div className="account-card-content">

                                <span>
                                    USERNAME
                                </span>

                                <strong>
                                    {user.username}
                                </strong>

                            </div>

                        </div>

                        <div className="account-card">

                            <div className="account-card-icon">
                                <FiMail />
                            </div>

                            <div className="account-card-content">

                                <span>
                                    EMAIL
                                </span>

                                <strong>
                                    {user.email}
                                </strong>

                            </div>

                        </div>

                        <div className="account-card">

                            <div className="account-card-icon">
                                <FiPackage />
                            </div>

                            <div className="account-card-content">

                                <span>
                                    ORDERS
                                </span>

                                <strong>
                                    {orders.length}
                                </strong>

                            </div>

                        </div>

                        <div
                            className="account-card account-card-clickable"
                            onClick={() =>
                                navigate("/wishlist")
                            }
                        >

                            <div className="account-card-icon">
                                <FiHeart />
                            </div>

                            <div className="account-card-content">

                                <span>
                                    WISHLIST
                                </span>

                                <strong>
                                    {wishlist.length}
                                </strong>

                            </div>

                        </div>

                    </div>

                    <section className="account-orders-section">

                        <div className="account-orders-header">

                            <div>

                                <span>
                                    ORDER HISTORY
                                </span>

                                <h2>
                                    MY <strong>ORDERS</strong>
                                </h2>

                            </div>

                            <span className="account-orders-count">
                                {orders.length} ORDERS
                            </span>

                        </div>

                        {ordersLoading ? (

                            <div className="account-orders-empty">
                                Loading orders...
                            </div>

                        ) : orders.length === 0 ? (

                            <div className="account-orders-empty">

                                <FiPackage />

                                <h3>
                                    No orders yet
                                </h3>

                                <p>
                                    Your WhatsApp orders will appear here.
                                </p>

                            </div>

                        ) : (

                            <div className="account-orders-list">

                                {orders.map((order) => (

                                    <button
                                        key={order.id}
                                        type="button"
                                        className="account-order-card"
                                        onClick={() =>
                                            handleOrderClick(
                                                order.id
                                            )
                                        }
                                    >

                                        <div className="account-order-main">

                                            <div className="account-order-icon">
                                                <FiPackage />
                                            </div>

                                            <div className="account-order-info">

                                                <span>
                                                    ORDER #{order.id}
                                                </span>

                                                <strong>
                                                    ₼{order.totalAmount}
                                                </strong>

                                            </div>

                                        </div>

                                        <div
                                            className={`account-order-status ${
                                                order.status
                                                    ? order.status.toLowerCase()
                                                    : ""
                                            }`}
                                        >
                                            {order.status}
                                        </div>

                                    </button>

                                ))}

                            </div>

                        )}

                    </section>

                    <div className="account-actions">

                        <button
                            type="button"
                            className="account-logout"
                            onClick={handleLogout}
                        >
                            <FiLogOut />
                            LOG OUT
                        </button>

                    </div>

                </div>

            </main>

            {selectedOrder && !orderLoading && (

                <div
                    className="order-modal-overlay"
                    onClick={closeOrderModal}
                >

                    <div
                        className="order-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <button
                            type="button"
                            className="order-modal-close"
                            onClick={closeOrderModal}
                            aria-label="Close"
                        >
                            <FiX />
                        </button>

                        <div className="order-modal-header">

                            <span>
                                ORDER DETAILS
                            </span>

                            <h2>
                                ORDER #{selectedOrder.id}
                            </h2>

                            <div
                                className={`account-order-status ${
                                    selectedOrder.status
                                        ? selectedOrder.status.toLowerCase()
                                        : ""
                                }`}
                            >
                                {selectedOrder.status}
                            </div>

                        </div>

                        <div className="order-modal-items">

                            <span className="order-modal-section-title">
                                PRODUCTS
                            </span>

                            {selectedOrderItems.length === 0 ? (

                                <div className="order-modal-no-items">
                                    No products found for this order.
                                </div>

                            ) : (

                                selectedOrderItems.map((item) => (

                                    <div
                                        className="order-modal-item"
                                        key={item.id}
                                    >

                                        <div>

                                            <strong>
                                                {item.productName}
                                            </strong>

                                            <span>
                                                {item.quantity} × ₼{item.price}
                                            </span>

                                        </div>

                                        <strong>
                                            ₼{
                                                item.price *
                                                item.quantity
                                            }
                                        </strong>

                                    </div>

                                ))

                            )}

                        </div>

                        <div className="order-modal-info">

                            <div>

                                <span>
                                    <FiMapPin />
                                    ADDRESS
                                </span>

                                <strong>
                                    {selectedOrder.address}
                                </strong>

                            </div>

                            <div>

                                <span>
                                    <FiPhone />
                                    PHONE
                                </span>

                                <strong>
                                    {selectedOrder.phone}
                                </strong>

                            </div>

                        </div>

                        <div className="order-modal-total">

                            <span>
                                TOTAL
                            </span>

                            <strong>
                                ₼{selectedOrder.totalAmount}
                            </strong>

                        </div>

                    </div>

                </div>

            )}

            {orderLoading && (

                <div className="order-modal-overlay">

                    <div className="order-modal-loading">
                        Loading order...
                    </div>

                </div>

            )}

            {orderError && (

                <div
                    className="order-modal-overlay"
                    onClick={() =>
                        setOrderError("")
                    }
                >

                    <div
                        className="order-modal-error"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <strong>
                            ORDER ERROR
                        </strong>

                        <span>
                            {orderError}
                        </span>

                        <button
                            type="button"
                            onClick={() =>
                                setOrderError("")
                            }
                        >
                            CLOSE
                        </button>

                    </div>

                </div>

            )}

            <Footer />
        </>
    );
}

export default Account;