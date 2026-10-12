import "./UsedMarket.css";

import radio from "../../assets/images/radiomasterBoxer.png";

import { useNavigate } from "react-router-dom";

import {
    FiCheckCircle,
    FiShield,
    FiDollarSign
} from "react-icons/fi";

function UsedMarket() {

    const navigate = useNavigate();

    return (
        <section className="used-market">

            <div className="used-card">

                <div className="used-left">

                    <h2>
                        USED MARKET
                    </h2>

                    <p className="used-subtitle">
                        Buy or Sell Used FPV Gear
                    </p>

                    <div className="used-list">

                        <div>
                            <FiCheckCircle />
                            <span>
                                150+ Active Listings
                            </span>
                        </div>

                        <div>
                            <FiShield />
                            <span>
                                Verified Sellers
                            </span>
                        </div>

                        <div>
                            <FiDollarSign />
                            <span>
                                Best Prices
                            </span>
                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            navigate("/used-market")
                        }
                    >
                        BROWSE USED ITEMS
                    </button>

                </div>

                <div className="used-right">

                    <img
                        src={radio}
                        alt="RadioMaster Boxer"
                    />

                </div>

            </div>

        </section>
    );
}

export default UsedMarket;