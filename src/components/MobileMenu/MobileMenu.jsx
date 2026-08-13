import "./MobileMenu.css";

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
    FiX,
    FiHeart,
    FiShoppingCart,
    FiUser,
    FiLogIn,
    FiUserPlus,
    FiLogOut
} from "react-icons/fi";

function MobileMenu({ isOpen, onClose }) {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkAuth = async () => {

            try {

                const response = await fetch(
                    "http://localhost:8080/api/auth/me",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                if (response.ok) {

                    const data = await response.json();

                    setUser(data);

                } else {

                    setUser(null);

                }

            } catch (error) {

                console.error(
                    "Mobile authentication check failed:",
                    error
                );

                setUser(null);

            } finally {

                setLoading(false);

            }
        };

        checkAuth();

    }, [isOpen]);

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

            console.error(
                "Logout error:",
                error
            );

        }

        setUser(null);
        onClose();
        navigate("/");

    };

    const goTo = (path) => {
        onClose();
        navigate(path);
    };

    return (
        <>
            <div
                className={`mobile-menu-overlay ${
                    isOpen ? "open" : ""
                }`}
                onClick={onClose}
            />

            <aside
                className={`mobile-menu ${
                    isOpen ? "open" : ""
                }`}
            >

                <div className="mobile-menu-header">

                    <div className="mobile-menu-logo">

                        <span>
                            FPVStore
                        </span>

                        <b>
                            .az
                        </b>

                    </div>

                    <button
                        className="mobile-menu-close"
                        type="button"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <FiX />
                    </button>

                </div>

                <div className="mobile-menu-links">

                    <NavLink
                        to="/"
                        end
                        onClick={onClose}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        onClick={onClose}
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/brands"
                        onClick={onClose}
                    >
                        Brands
                    </NavLink>

                    <NavLink
                        to="/used-market"
                        onClick={onClose}
                    >
                        Used Market
                    </NavLink>

                    <NavLink
                        to="/community"
                        onClick={onClose}
                    >
                        Community
                    </NavLink>

                    <NavLink
                        to="/support"
                        onClick={onClose}
                    >
                        Support
                    </NavLink>

                </div>

                <div className="mobile-menu-divider" />

                <div className="mobile-menu-actions">

                    <NavLink
                        to="/cart"
                        onClick={onClose}
                    >
                        <FiShoppingCart />
                        <span>Cart</span>
                    </NavLink>

                    <NavLink
                        to="/wishlist"
                        onClick={onClose}
                    >
                        <FiHeart />
                        <span>Wishlist</span>
                    </NavLink>

                    {!loading && user ? (

                        <>
                            <button
                                type="button"
                                onClick={() =>
                                    goTo("/account")
                                }
                            >
                                <FiUser />
                                <span>My Account</span>
                            </button>

                            <button
                                type="button"
                                onClick={handleLogout}
                            >
                                <FiLogOut />
                                <span>Log Out</span>
                            </button>
                        </>

                    ) : (

                        <>
                            <NavLink
                                to="/login"
                                onClick={onClose}
                            >
                                <FiLogIn />
                                <span>Login</span>
                            </NavLink>

                            <NavLink
                                to="/signup"
                                onClick={onClose}
                            >
                                <FiUserPlus />
                                <span>Sign Up</span>
                            </NavLink>
                        </>

                    )}

                </div>

                <div className="mobile-menu-footer">

                    <span>
                        FPVStore.az
                    </span>

                    <small>
                        Everything for FPV Pilots
                    </small>

                </div>

            </aside>
        </>
    );
}

export default MobileMenu;