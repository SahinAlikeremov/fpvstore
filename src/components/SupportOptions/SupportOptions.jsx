import "./SupportOptions.css";

import {
    FiPackage,
    FiTruck,
    FiTool,
    FiMessageCircle
} from "react-icons/fi";

function SupportOptions() {
    return (

        <section className="support-options">

            <div className="support-title">

                <span>HOW CAN WE HELP?</span>

                <h2>
                    Choose A Support Category
                </h2>

                <p>
                    Whether you have questions about your order,
                    delivery, technical issues or general inquiries,
                    our team is ready to help.
                </p>

            </div>

            <div className="support-grid">

                <div className="support-card">

                    <div className="support-icon">

                        <FiPackage />

                    </div>

                    <h3>
                        Order Support
                    </h3>

                    <p>
                        Get updates about your orders,
                        payments and order status.
                    </p>

                </div>

                <div className="support-card">

                    <div className="support-icon">

                        <FiTruck />

                    </div>

                    <h3>
                        Delivery & Pickup
                    </h3>

                    <p>
                        Need help with delivery, Bolt Send or <br /> in-person pickup?
                    </p>

                </div>

                <div className="support-card">

                    <div className="support-icon">

                        <FiTool />

                    </div>

                    <h3>
                        Technical Help
                    </h3>

                    <p>
                        Need help choosing products
                        or solving technical problems?
                    </p>

                </div>

                <div className="support-card">

                    <div className="support-icon">

                        <FiMessageCircle />

                    </div>

                    <h3>
                        General Questions
                    </h3>

                    <p>
                        Contact us for anything
                        related to FPVStore.az.
                    </p>

                </div>

            </div>

        </section>

    );
}

export default SupportOptions;