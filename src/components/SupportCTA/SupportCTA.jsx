import "./SupportCTA.css";

import { FiArrowRight } from "react-icons/fi";

function SupportCTA() {
    return (

        <section className="support-cta">

            <div className="support-cta-box">

                <span>
                    NEED MORE HELP?
                </span>

                <h2>
                    Our Team Is Always
                    <br />
                    Ready To Help You
                </h2>

                <p>
                    Whether you need assistance with an order,
                    product recommendations or technical support,
                    we're only one message away.
                </p>

                <button>

                    Contact Support

                    <FiArrowRight />

                </button>

            </div>

        </section>

    );
}

export default SupportCTA;