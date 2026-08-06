import "./BrandCard.css";

import {
    FiArrowRight
} from "react-icons/fi";

import ovoniclogo from "../../assets/images/ovoniclogo.png";

function BrandCard() {
    return (
        <div className="brand-card">

            <div className="brand-logo">

                <img
                    src={ovoniclogo}
                    alt="Ovonic"
                />

            </div>

            <div className="brand-content">

                <h3>Ovonic</h3>

                <p>
                    High-performance FPV LiPo batteries
                    designed for racing, freestyle and
                    long-range flights.
                </p>
                <span className="brand-products">
                    4 Battery Models
                </span>

                <button className="brand-btn">

                    View Products

                    <FiArrowRight />

                </button>

            </div>

        </div>
    );
}

export default BrandCard;