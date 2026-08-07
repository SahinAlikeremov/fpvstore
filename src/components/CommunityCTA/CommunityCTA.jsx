import "./CommunityCTA.css";

import { FiArrowRight } from "react-icons/fi";

function CommunityCTA() {
    return (

        <section className="community-cta">

            <div className="community-cta-box">

                <span>
                    JOIN THE FPV COMMUNITY
                </span>

                <h2>
                    Ready To Take Your
                    <br />
                    FPV Journey Further?
                </h2>

                <p>
                    Explore premium FPV products, discover inspiring builds,
                    connect with passionate pilots and become part of
                    Azerbaijan's fastest growing FPV community.
                </p>

                <button>

                    Explore Products

                    <FiArrowRight />

                </button>

            </div>

        </section>

    );
}

export default CommunityCTA;