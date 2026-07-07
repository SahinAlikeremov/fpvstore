import "./ProductsHero.css";

import drone from "../../assets/images/heroDrone.png";

import { FiSearch } from "react-icons/fi";

function ProductsHero() {
  return (
    <section className="products-hero">

      <div className="products-hero-container">

        <div className="products-left">

          <span className="products-tag">
            FPVSTORE.AZ
          </span>

          <h1>
            FIND YOUR NEXT
            <br />
            FPV BUILD
          </h1>

          <p>
            Explore premium FPV drones, motors, frames,
            batteries, cameras and accessories from the
            world's leading brands.
          </p>

          <div className="products-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search products..."
            />

          </div>

        </div>

        <div className="products-right">

          <img
            src={drone}
            alt="FPV Drone"
          />

        </div>

      </div>

    </section>
  );
}

export default ProductsHero;