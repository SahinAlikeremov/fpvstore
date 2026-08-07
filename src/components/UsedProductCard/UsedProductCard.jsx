import "./UsedProductCard.css";

import {
    FiHeart,
    FiMapPin,
    FiEye,
    FiStar
} from "react-icons/fi";

import batteryImage from "../../assets/images/ovonic1300.png";

function UsedProductCard() {
    return (
        <div className="used-product-card">

            <div className="used-badge">
                Like New
            </div>

            <button className="used-wishlist">

                <FiHeart />

            </button>

            <div className="used-image">

                <img
                    src={batteryImage}
                    alt="Battery"
                />

            </div>

            <div className="used-content">

                <h3>
                    Ovonic 1300mAh
                </h3>

                <span className="battery-grade">
                    BATTERY GRADE
                </span>

                <div className="used-rating">

                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />

                </div>

                <span className="battery-condition">
                    Brand New
                </span>

                <div className="used-location">

                    <FiMapPin />

                    Baku

                </div>

                <div className="used-price">

                    <span className="old-price">
                        ₼69
                    </span>

                    <h2>
                        ₼59
                    </h2>

                </div>

                <button className="used-btn">

                    <FiEye />

                    View Details

                </button>

            </div>

        </div>
    );
}

export default UsedProductCard;