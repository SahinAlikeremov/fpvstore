import "./WhyFPVStore.css";

import {
  FiShield,
  FiMapPin,
  FiTool,
  FiBatteryCharging
} from "react-icons/fi";

function WhyFPVStore() {
  return (
    <section className="why-card">

      <h2>WHY FPVSTORE.AZ?</h2>

      <div className="why-list">

        <div className="why-item">
          <FiShield />
          <div>
            <h3>Genuine Products</h3>
            <p>Only trusted FPV brands.</p>
          </div>
        </div>

        <div className="why-item">
          <FiTool />
          <div>
            <h3>Expert Support</h3>
            <p>Help before & after purchase.</p>
          </div>
        </div>

        <div className="why-item">
          <FiMapPin />
          <div>
            <h3>Meet in Baku</h3>
            <p>No shipping, local pickup.</p>
          </div>
        </div>

        <div className="why-item">
          <FiBatteryCharging />
          <div>
            <h3>Battery Tested</h3>
            <p>Every battery is carefully checked.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default WhyFPVStore;