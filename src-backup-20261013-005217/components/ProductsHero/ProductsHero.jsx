import "./ProductsHero.css";

import drone from "../../assets/images/heroDrone.png";

import { FiSearch } from "react-icons/fi";

function ProductsHero({ search, setSearch }) {

    return (

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
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
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
    );
}

export default ProductsHero;