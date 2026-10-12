import "./ContactBanner.css";

import { FaWhatsapp } from "react-icons/fa";

function ContactBanner() {
  return (
    <section className="contact-banner">

      <div className="contact-overlay">

        <div className="contact-left">

          <span>INTERESTED IN BUYING?</span>

          <h2>CONTACT ME DIRECTLY</h2>

        </div>

        <a
          className="contact-btn"
          href="https://wa.me/994707991070"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          CONTACT ME ON WHATSAPP
        </a>

      </div>

    </section>
  );
}

export default ContactBanner;