import "./SellYourGear.css";

import { FiArrowRight } from "react-icons/fi";

function SellYourGear() {

    const handlePostAd = () => {

        const phone = "994707991070";

        const message = `
Salam! FPVStore.az üzərindən məhsulumu Used Market-də satmaq istəyirəm.

Məhsulun adı:
Marka:
Vəziyyəti:
Qiyməti:
Açıqlama:

Məhsulun fotolarını bu söhbətə göndərəcəyəm.

Elan uğurla satıldıqdan sonra satış məbləğinin 10%-i FPVStore.az xidmət komissiyası olaraq ödənilir.
        `;

        const whatsappUrl =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );
    };

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

                <button
                    type="button"
                    onClick={handlePostAd}
                >

                    Post Your Ad

                    <FiArrowRight />

                </button>

            </div>

        </section>
    );
}

export default SellYourGear;