import "./Footer.css";

import {
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2 className="footer-logo">
            FPVStore<span>.az</span>
          </h2>

          <p className="footer-text">
            The most trusted FPV marketplace in Azerbaijan.
            <br />
            No shipping. No waiting.
            <br />
            We meet in Baku.
          </p>

          <div className="footer-socials">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaTelegramPlane />
            </a>

            <a href="#">
              <FaTiktok />
            </a>

          </div>

        </div>

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Brands</a>
          <a href="#">Used Market</a>
          <a href="#">Community</a>
          <a href="#">Support</a>

        </div>

        <div className="footer-column">

          <h3>INFORMATION</h3>

          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>

        </div>

        <div className="footer-column">

          <h3>CATEGORIES</h3>

          <a href="#">Racing</a>
          <a href="#">Freestyle</a>
          <a href="#">Long Range</a>
          <a href="#">Cinewhoop</a>
          <a href="#">Tinywhoop</a>

        </div>

        <div className="footer-column">

          <h3>CONTACT</h3>

          <p>📱 WhatsApp: +994 70 799 10 70</p>

          <p>📷 Instagram: @sahin_fpv</p>

          <p>✈ Facebook: @sahin_fpv</p>

          <p>📍 Baku, Azerbaijan</p>

          <p>Meeting Only</p>

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