import "./CommunityCTA.css";

import { FiArrowRight } from "react-icons/fi";

import { Link } from "react-router-dom";

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


                <div className="community-cta-buttons">

                    <Link
                        to="/signup"
                        className="community-btn primary"
                    >

                        JOIN COMMUNITY

                        <FiArrowRight />

                    </Link>


                    <Link
                        to="/products"
                        className="community-btn secondary"
                    >

                        EXPLORE PRODUCTS

                        <FiArrowRight />

                    </Link>

                </div>

            </div>

        </section>

    );

}

export default CommunityCTA;