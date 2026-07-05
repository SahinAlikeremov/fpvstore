import "./TopBrands.css";

import dji from "../../assets/images/dji.png";
import tmotor from "../../assets/images/t-motor.png";
import speedybee from "../../assets/images/speedybee.png";
import rushfpv from "../../assets/images/rushfpv.webp";
import mepsking from "../../assets/images/mepsking.webp";
import radiomaster from "../../assets/images/radiomaster.png";
import betafpv from "../../assets/images/betafpv.webp";
import gemfan from "../../assets/images/gemfan.png";

const brands = [
    dji,
    tmotor,
    speedybee,
    rushfpv,
    mepsking,
    radiomaster,
    betafpv,
    gemfan,
];

function TopBrands() {
    return (
        <section className="top-brands">

            <div className="top-brands-container">

                <div className="section-title">
                    <h2>TOP BRANDS</h2>
                    <span></span>
                </div>

                <div className="brands-grid">

                    {brands.map((brand, index) => (

                        <div
                            className="brand-card"
                            key={index}
                        >
                            <img
                                src={brand}
                                alt="Brand"
                            />
                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default TopBrands;