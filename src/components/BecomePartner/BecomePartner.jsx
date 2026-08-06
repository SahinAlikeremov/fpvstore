import "./BecomePartner.css";

import { FiArrowRight } from "react-icons/fi";

function BecomePartner() {
  return (
    <section className="become-partner">

      <div className="partner-container">

        <span className="partner-tag">
          PARTNER WITH FPVSTORE.AZ
        </span>

        <h2>
          Grow Your FPV Brand With Us
        </h2>

        <p>
          Join FPVStore.az and reach FPV pilots across Azerbaijan.
          We're always looking for trusted brands to expand our
          marketplace together.
        </p>

        <button className="partner-btn">

          Become a Partner

          <FiArrowRight />

        </button>

      </div>

    </section>
  );
}

export default BecomePartner;