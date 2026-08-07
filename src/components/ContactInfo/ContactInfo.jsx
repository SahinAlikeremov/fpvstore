import "./ContactInfo.css";

import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiClock
} from "react-icons/fi";

function ContactInfo() {
    return (

        <section className="contact-info">

            <div className="contact-info-title">

                <span>CONTACT INFORMATION</span>

                <h2>
                    Get In Touch
                </h2>

                <p>
                    Have questions? Reach out to us through any
                    of the contact methods below.
                </p>

            </div>

            <div className="contact-info-grid">

                <div className="contact-card">

                    <div className="contact-icon">
                        <FiMail />
                    </div>

                    <h3>Email</h3>

                    <p>
                        support@fpvstore.az
                    </p>

                </div>

                <div className="contact-card">

                    <div className="contact-icon">
                        <FiPhone />
                    </div>

                    <h3>Phone</h3>

                    <p>
                        +994 50 123 45 67
                    </p>

                </div>

                <div className="contact-card">

                    <div className="contact-icon">
                        <FiMapPin />
                    </div>

                    <h3>Location</h3>

                    <p>
                        Baku, Azerbaijan
                    </p>

                </div>

                <div className="contact-card">

                    <div className="contact-icon">
                        <FiClock />
                    </div>

                    <h3>Working Hours</h3>

                    <p>
                        Mon - Sat<br />
                        09:00 - 18:00
                    </p>

                </div>

            </div>

        </section>

    );
}

export default ContactInfo;