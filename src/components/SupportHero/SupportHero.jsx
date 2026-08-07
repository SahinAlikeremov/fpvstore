import "./SupportHero.css";

import heroImage from "../../assets/images/supportHero.png";
    
function SupportHero() {
    return (

        <section className="support-hero">

            <div className="support-hero-container">

                <div className="support-left">

                    <span className="support-tag">
                        CUSTOMER SUPPORT
                    </span>

                    <h1>
                        WE'RE HERE
                        <br />
                        <span>TO HELP</span>
                    </h1>

                    <p>
                        Need help with your order, shipping,
                        FPV products or technical questions?
                        Our support team is always ready to
                        assist you.
                    </p>

                </div>

                <div className="support-right">

                    <img
                        src={heroImage}
                        alt="Support"
                    />

                </div>

            </div>

        </section>

    );

}

export default SupportHero;