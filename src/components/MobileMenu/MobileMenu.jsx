import "./MobileMenu.css";

import { NavLink } from "react-router-dom";
import {
    FiX,
    FiHeart,
    FiShoppingCart,
    FiUser
} from "react-icons/fi";

function MobileMenu({ isOpen, onClose }) {
    return (
        <>
            <div
                className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}
                onClick={onClose}
            />

            <aside className={`mobile-menu ${isOpen ? "open" : ""}`}>

                <div className="mobile-menu-header">

                    <div className="mobile-menu-logo">
                        <span>FPVStore</span>
                        <b>.az</b>
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

                    <button
                        type="button"
                        onClick={onClose}
                    >
                        <FiHeart />
                        <span>Wishlist</span>
                    </button>

                    <NavLink
                        to="/login"
                        onClick={onClose}
                    >
                        <FiUser />
                        <span>Account</span>
                    </NavLink>

                </div>

                <div className="mobile-menu-footer">
                    <span>FPVStore.az</span>
                    <small>Everything for FPV Pilots</small>
                </div>

            </aside>
        </>
    );
}

export default MobileMenu;