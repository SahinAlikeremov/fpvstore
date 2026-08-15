import "./AdminOrders.css";

import { useEffect, useState } from "react";

function AdminOrders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchOrders = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await fetch(
                "http://localhost:8080/api/orders/admin",
                {
                    credentials: "include"
                }
            );


            if (!response.ok) {

                const data =
                    await response
                        .json()
                        .catch(() => null);

                throw new Error(
                    data?.message ||
                    "Orders could not be loaded."
                );
            }


            const data =
                await response.json();

            setOrders(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (error) {

            console.error(
                "Admin orders error:",
                error
            );

            setError(
                error.message ||
                "Orders could not be loaded."
            );

        } finally {

            setLoading(false);

        }

    };


    useEffect(() => {

        fetchOrders();

    }, []);


    const updateStatus = async (
        orderId,
        status
    ) => {

        try {

            const response = await fetch(
                `http://localhost:8080/api/orders/admin/${orderId}/status`,
                {
                    method: "PUT",

                    credentials: "include",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        status
                    })
                }
            );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Status could not be updated."
                );

            }


            setOrders((currentOrders) =>

                currentOrders.map((order) =>

                    order.id === orderId
                        ? data
                        : order

                )

            );


        } catch (error) {

            console.error(
                "Status update error:",
                error
            );

            alert(
                error.message ||
                "Status could not be updated."
            );

        }

    };


    if (loading) {

        return (

            <main className="admin-orders-page">

                <div className="admin-orders-container">

                    <p>
                        Loading orders...
                    </p>

                </div>

            </main>

        );

    }


    if (error) {

        return (

            <main className="admin-orders-page">

                <div className="admin-orders-container">

                    <p>
                        {error}
                    </p>

                </div>

            </main>

        );

    }


    return (

        <main className="admin-orders-page">

            <div className="admin-orders-container">

                <div className="admin-orders-header">

                    <div>

                        <span>
                            FPVSTORE ADMIN
                        </span>

                        <h1>
                            Order Management
                        </h1>

                        <p>
                            Manage customer orders and update
                            their status.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="refresh-btn"
                        onClick={fetchOrders}
                    >
                        Refresh
                    </button>

                </div>


                <div className="orders-table">

                    <div className="orders-table-head">

                        <span>
                            Order
                        </span>

                        <span>
                            User
                        </span>

                        <span>
                            Total
                        </span>

                        <span>
                            Phone
                        </span>

                        <span>
                            Address
                        </span>

                        <span>
                            Status
                        </span>

                        <span>
                            Actions
                        </span>

                    </div>


                    {orders.length === 0 ? (

                        <div className="empty-orders">
                            No orders found.
                        </div>

                    ) : (

                        orders.map((order) => (

                            <div
                                className="order-row"
                                key={order.id}
                            >

                                <strong>
                                    #{order.id}
                                </strong>


                                <span>
                                    User #{order.userId}
                                </span>


                                <span>
                                    ₼{order.totalAmount}
                                </span>


                                <span>
                                    {order.phone}
                                </span>


                                <span>
                                    {order.address}
                                </span>


                                <span
                                    className={`status status-${
                                        order.status
                                            ? order.status.toLowerCase()
                                            : ""
                                    }`}
                                >
                                    {order.status}
                                </span>


                                <div className="order-actions">

                                    {order.status === "PENDING" && (

                                        <>

                                            <button
                                                type="button"
                                                className="action-confirm"
                                                onClick={() =>
                                                    updateStatus(
                                                        order.id,
                                                        "CONFIRMED"
                                                    )
                                                }
                                            >
                                                Confirm
                                            </button>


                                            <button
                                                type="button"
                                                className="action-cancel"
                                                onClick={() =>
                                                    updateStatus(
                                                        order.id,
                                                        "CANCELLED"
                                                    )
                                                }
                                            >
                                                Cancel
                                            </button>

                                        </>

                                    )}


                                    {order.status === "CONFIRMED" && (

                                        <>

                                            <button
                                                type="button"
                                                className="action-complete"
                                                onClick={() =>
                                                    updateStatus(
                                                        order.id,
                                                        "COMPLETED"
                                                    )
                                                }
                                            >
                                                Complete
                                            </button>


                                            <button
                                                type="button"
                                                className="action-cancel"
                                                onClick={() =>
                                                    updateStatus(
                                                        order.id,
                                                        "CANCELLED"
                                                    )
                                                }
                                            >
                                                Cancel
                                            </button>

                                        </>

                                    )}


                                    {order.status === "COMPLETED" && (

                                        <span className="final-status">
                                            Completed
                                        </span>

                                    )}


                                    {order.status === "CANCELLED" && (

                                        <span className="final-status">
                                            Cancelled
                                        </span>

                                    )}

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </main>

    );

}

export default AdminOrders;