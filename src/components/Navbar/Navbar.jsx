import "./Navbar.css";
import { useState, useEffect } from "react";
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

        <div className="logo">
          <span className="logo-white">FPVStore</span>
          <span className="logo-red">.az</span>
        </div>

        <ul className="nav-links">
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Used Market</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Support</a></li>
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