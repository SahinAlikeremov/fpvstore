import "./SupportCTA.css";

import { FiArrowRight } from "react-icons/fi";

function SupportCTA() {

    const handleContactSupport = () => {

        const phone = "994707991070";

        const message =
            "Salam! FPVStore.az saytından sizə dəstək üçün yazıram. " +
            "Məhsul, sifariş və ya texniki məsələ ilə bağlı köməyə ehtiyacım var.";

        const whatsappUrl =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );
    };

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

                <button
                    type="button"
                    onClick={handleContactSupport}
                >

                    Contact Support

                    <FiArrowRight />

                </button>

            </div>

        </section>

    );
}

export default SupportCTA;