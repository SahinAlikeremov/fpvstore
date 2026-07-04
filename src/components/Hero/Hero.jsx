import "./Hero.css";
import heroBg from "../../assets/images/heroBanner.png";

import { useEffect, useState } from "react";

import {
  FiBox,
  FiHeart,
  FiUsers,
  FiMapPin
} from "react-icons/fi";

function Hero() {

  const [mobileTitle, setMobileTitle] = useState(window.innerWidth <= 1200);

  useEffect(() => {

    const handleResize = () => {
      setMobileTitle(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-top">
            <p>THE COMPLETE</p>
            <span></span>
          </div>

          <h1>
            {mobileTitle ? (
              <>
                FPV
                <br />
                ECOSYSTEM
              </>
            ) : (
              "FPV ECOSYSTEM"
            )}
          </h1>

          <h2>Everything for FPV Pilots</h2>

          <p className="hero-description">
            Motors • ESC • Batteries • Frames • Cameras • Goggles
          </p>

          <div className="hero-buttons">

            <button className="hero-btn hero-btn-primary">
              SHOP NOW
            </button>

            <button className="hero-btn hero-btn-secondary">
              EXPLORE PRODUCTS
            </button>

          </div>

          <div className="hero-features">

            <div className="feature">
              <div className="feature-icon">
                <FiBox />
              </div>

              <div className="feature-text">
                <h3>1000+</h3>
                <span>Products</span>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <FiHeart />
              </div>

              <div className="feature-text">
                <h3>50+</h3>
                <span>Top Brands</span>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <FiUsers />
              </div>

              <div className="feature-text">
                <h3>Trusted by</h3>
                <span>FPV Pilots</span>
              </div>
            </div>

            <div className="feature baku-feature">
              <div className="feature-icon">
                <FiMapPin />
              </div>

              <div className="feature-text">
                <h3>Meet in Baku</h3>
                <span>No Shipping</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;