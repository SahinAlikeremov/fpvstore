import "./UsedHero.css";

import heroImage from "../../assets/images/usedHero.png";

function UsedHero() {
  return (
    <section className="used-hero">

      <div className="used-hero-container">

        <div className="used-left">

          <span className="used-tag">
            USED FPV MARKETPLACE
          </span>

          <h1>
            BUY & SELL
            <br />
            <span>USED FPV GEAR</span>
          </h1>

          <p>
            Discover high-quality second-hand FPV drones,
            batteries, motors, frames and accessories from
            trusted pilots across Azerbaijan.
          </p>

        </div>

        <div className="used-right">

          <img
            src={heroImage}
            alt="Used FPV"
          />

        </div>

      </div>

    </section>
  );
}

export default UsedHero;