import "./Testimonials.css";

import {
    FiStar
} from "react-icons/fi";

function Testimonials() {
    return (

        <section className="testimonials">

            <div className="testimonials-title">

                <span>COMMUNITY REVIEWS</span>

                <h2>
                    What FPV Pilots Say
                </h2>

                <p>
                    Hear from FPV enthusiasts who are already part
                    of the FPVStore.az community.
                </p>

            </div>

            <div className="testimonials-grid">

                <div className="testimonial-card">

                    <div className="testimonial-stars">
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                    </div>

                    <p>
                        "Amazing community! I learned so much about
                        FPV racing and met many experienced pilots."
                    </p>

                    <div className="testimonial-user">

                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            alt=""
                        />

                        <div>

                            <h4>
                                Elçin
                            </h4>

                            <span>
                                FPV Racing Pilot
                            </span>

                        </div>

                    </div>

                </div>

                <div className="testimonial-card">

                    <div className="testimonial-stars">
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                    </div>

                    <p>
                        "Premium products, fast shipping and
                        excellent customer support every time."
                    </p>

                    <div className="testimonial-user">

                        <img
                            src="https://i.pravatar.cc/100?img=32"
                            alt=""
                        />

                        <div>

                            <h4>
                                Şahin
                            </h4>

                            <span>
                                Freestyle Pilot
                            </span>

                        </div>

                    </div>

                </div>

                <div className="testimonial-card">

                    <div className="testimonial-stars">
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                    </div>

                    <p>
                        "The best FPV marketplace in Azerbaijan.
                        Highly recommended for every pilot."
                    </p>

                    <div className="testimonial-user">

                        <img
                            src="https://i.pravatar.cc/100?img=48"
                            alt=""
                        />

                        <div>

                            <h4>
                                Fərid
                            </h4>

                            <span>
                                Long Range Pilot
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Testimonials;