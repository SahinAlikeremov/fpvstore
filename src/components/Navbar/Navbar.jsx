import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
    FiSearch,
    FiHeart,
    FiShoppingCart,
    FiUser,
    FiMenu,
} from "react-icons/fi";

function Navbar() {

    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 1400
    );

    useEffect(() => {

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1400);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (

        <nav className="navbar">

            <div className="navbar-container">

                <NavLink to="/" className="logo">

                    <span className="logo-white">
                        FPVStore
                    </span>

                    <span className="logo-red">
                        .az
                    </span>

                </NavLink>


                <ul className="nav-links">

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/"
                            end
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/products"
                        >
                            Products
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/brands"
                        >
                            Brands
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/used-market"
                        >
                            Used Market
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/community"
                        >
                            Community
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/support"
                        >
                            Support
                        </NavLink>
                    </li>

                </ul>


                <div className="right-side">

                    <div className="search-box">

                        <FiSearch />

                        <input
                            type="text"
                            placeholder={
                                isSmallScreen
                                    ? "Search..."
                                    : "Search products..."
                            }
                        />

                    </div>


                    <button
                        className="icon-btn"
                        type="button"
                        aria-label="Wishlist"
                    >
                        <FiHeart />
                    </button>


                    {/* CART */}

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `icon-btn ${isActive ? "active" : ""}`
                        }
                        aria-label="Shopping Cart"
                    >
                        <FiShoppingCart />
                    </NavLink>


                    <button
                        className="icon-btn"
                        type="button"
                        aria-label="Account"
                    >
                        <FiUser />
                    </button>


                    <button
                        className="menu-btn"
                        type="button"
                        aria-label="Menu"
                    >
                        <FiMenu />
                    </button>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;