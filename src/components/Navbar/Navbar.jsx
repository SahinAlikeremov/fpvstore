import "./Navbar.css";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
    FiSearch,
    FiHeart,
    FiShoppingCart,
    FiUser,
    FiMenu
} from "react-icons/fi";

import AccountMenu from "../AccountMenu/AccountMenu";
import MobileMenu from "../MobileMenu/MobileMenu";

function Navbar() {

    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 1400
    );

    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isAccountHovered, setIsAccountHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {

        const handleResize = () => {

            setIsSmallScreen(window.innerWidth <= 1400);

            if (window.innerWidth > 1050) {
                setIsMenuOpen(false);
            }

        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    const showAccountMenu =
        isAccountOpen || isAccountHovered;

    return (

        <>

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

    <NavLink
        to="/wishlist"
        className={({ isActive }) =>
            `icon-btn ${isActive ? "active" : ""}`
        }
        aria-label="Wishlist"
    >
        <FiHeart />
    </NavLink>

    <NavLink
        to="/cart"
        className={({ isActive }) =>
            `icon-btn ${isActive ? "active" : ""}`
        }
        aria-label="Shopping Cart"
    >
        <FiShoppingCart />
    </NavLink>

    {/* ACCOUNT */}
    <div
        className="account-wrapper"
        onMouseEnter={() =>
            setIsAccountHovered(true)
        }
        onMouseLeave={() =>
            setIsAccountHovered(false)
        }
    >

        <button
            className="icon-btn"
            type="button"
            aria-label="Account"
            onClick={() =>
                setIsAccountOpen((prev) => !prev)
            }
        >
            <FiUser />
        </button>

        <AccountMenu
            isOpen={showAccountMenu}
            onClose={() =>
                setIsAccountOpen(false)
            }
        />

    </div>

    <button
        className="menu-btn"
        type="button"
        aria-label="Menu"
        onClick={() =>
            setIsMenuOpen(true)
        }
    >
        <FiMenu />
    </button>

</div>

                </div>

            </nav>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

        </>

    );
}

export default Navbar;