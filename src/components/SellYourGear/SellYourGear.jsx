import "./SellYourGear.css";

import { FiArrowRight } from "react-icons/fi";

function SellYourGear() {
    return (

        <section className="sell-your-gear">

            <div className="sell-container">

                <span>
                    SELL YOUR FPV GEAR
                </span>

                <h2>
                    Have FPV Equipment You Don't Use?
                </h2>

                <p>
                    Sell your drones, batteries, motors, frames,
                    flight controllers and accessories easily on
                    FPVStore.az. Reach thousands of FPV pilots
                    across Azerbaijan.
                </p>

                <button>

                    Post Your Ad

                    <FiArrowRight />

                </button>

            </div>

        </section>

    );
}

export default SellYourGear;