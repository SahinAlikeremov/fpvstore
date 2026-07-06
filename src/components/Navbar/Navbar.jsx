import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMenu,
} from "react-icons/fi";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1400);

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
          <span className="logo-white">FPVStore</span>
          <span className="logo-red">.az</span>
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/" end>Home</NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/products">Products</NavLink>
          </li>

          <li>
            <NavLink to="/brands">Brands</NavLink>
          </li>

          <li>
            <NavLink to="/used-market">Used Market</NavLink>
          </li>

          <li>
            <NavLink to="/community">Community</NavLink>
          </li>

          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>

        <div className="right-side">

          <div className="search-box">
            <FiSearch />

            <input
              type="text"
              placeholder={isSmallScreen ? "Search..." : "Search products..."}
            />
          </div>

          <button className="icon-btn">
            <FiHeart />
          </button>

          <button className="icon-btn">
            <FiShoppingCart />
          </button>

          <button className="icon-btn">
            <FiUser />
          </button>

          <button className="menu-btn">
            <FiMenu />
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;