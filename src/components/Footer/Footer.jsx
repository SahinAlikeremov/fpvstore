import "./Footer.css";

import {
    FaInstagram,
    FaYoutube,
    FaTelegramPlane,
    FaTiktok
} from "react-icons/fa";

import { Link } from "react-router-dom";


function Footer() {

    const whatsappUrl =
        "https://wa.me/994707991070";


    return (

        <footer className="footer">

            <div className="footer-container">


                {/* BRAND */}

                <div className="footer-column">

                    <h2 className="footer-logo">
                        FPVStore<span>.az</span>
                    </h2>

                    <p className="footer-text">
                        The most trusted FPV marketplace in Azerbaijan.
                        <br />
                        Pickup in Baku.
                        <br />
                        Bolt Send available on request.
                    </p>


                    <div className="footer-socials">

                        <a
                            href="https://instagram.com/sahin_fpv"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>


                        <a
                            href="#"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>


                        <a
                            href="#"
                            aria-label="Telegram"
                        >
                            <FaTelegramPlane />
                        </a>


                        <a
                            href="#"
                            aria-label="TikTok"
                        >
                            <FaTiktok />
                        </a>

                    </div>

                </div>


                {/* QUICK LINKS */}

                <div className="footer-column">

                    <h3>
                        QUICK LINKS
                    </h3>

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/brands">
                        Brands
                    </Link>

                    <Link to="/used-market">
                        Used Market
                    </Link>

                    <Link to="/community">
                        Community
                    </Link>

                    <Link to="/support">
                        Support
                    </Link>

                </div>


                {/* INFORMATION */}

                <div className="footer-column">

                    <h3>
                        INFORMATION
                    </h3>

                    <Link to="/about">
                        About Us
                    </Link>

                    <Link to="/support">
                        Contact
                    </Link>

                    <Link to="/terms">
                        Terms & Conditions
                    </Link>

                    <Link to="/privacy">
                        Privacy Policy
                    </Link>

                </div>


                {/* CATEGORIES */}

                <div className="footer-column">

                    <h3>
                        CATEGORIES
                    </h3>

                    <Link to="/products?category=Racing">
                        Racing
                    </Link>

                    <Link to="/products?category=Freestyle">
                        Freestyle
                    </Link>

                    <Link to="/products?category=Long%20Range">
                        Long Range
                    </Link>

                    <Link to="/products?category=Cinewhoop">
                        Cinewhoop
                    </Link>

                    <Link to="/products?category=Tinywhoop">
                        Tinywhoop
                    </Link>

                </div>


                {/* CONTACT */}

                <div className="footer-column">

                    <h3>
                        CONTACT
                    </h3>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        📱 WhatsApp: +994 70 799 10 70
                    </a>

                    <a
                        href="https://instagram.com/sahin_fpv"
                        target="_blank"
                        rel="noreferrer"
                    >
                        📷 Instagram: @sahin_fpv
                    </a>

                    <p>
                        ✈ Facebook: @sahin_fpv
                    </p>

                    <p>
                        📍 Baku, Azerbaijan
                    </p>

                </div>

            </div>


            <div className="footer-bottom">

                <span>
                    © 2026 FPVStore.az — All Rights Reserved.
                </span>

                <span>
                    Made with ❤️ for FPV Pilots
                </span>

            </div>

        </footer>
    );
}


export default Footer;