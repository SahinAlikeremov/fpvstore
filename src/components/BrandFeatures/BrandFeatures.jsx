import "./BrandFeatures.css";

import {
  FiShield,
  FiTruck,
  FiAward,
  FiHeadphones
} from "react-icons/fi";

function BrandFeatures() {
  return (
    <section className="brand-features">

      <div className="brand-features-title">

        <span>WHY CHOOSE US</span>

        <h2>
          Why Choose Our Brands
        </h2>

        <p>
          We carefully select trusted FPV brands to provide
          reliable products, fast delivery and excellent
          customer support.
        </p>

      </div>

      <div className="brand-features-grid">

        <div className="feature-card">

          <div className="feature-icon">
            <FiShield />
          </div>

          <h3>100% Genuine</h3>

          <p>
            Every product comes directly from trusted
            manufacturers and official distributors.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <FiTruck />
          </div>

          <h3>Fast Shipping</h3>

          <p>
            Quick and secure delivery across Azerbaijan
            with carefully packed orders.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <FiAward />
          </div>

          <h3>Professional Quality</h3>

          <p>
            Products trusted by freestyle,
            racing and long range FPV pilots.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <FiHeadphones />
          </div>

          <h3>Friendly Support</h3>

          <p>
            We're always ready to help you
            choose the right FPV equipment.
          </p>

        </div>

      </div>

    </section>
  );
}

export default BrandFeatures;