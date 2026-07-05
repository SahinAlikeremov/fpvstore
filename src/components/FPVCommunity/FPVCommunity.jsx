import "./FPVCommunity.css";

import img1 from "../../assets/images/community1.webp";
import img2 from "../../assets/images/community2.jpg";
import img3 from "../../assets/images/community3.jpg";
import img4 from "../../assets/images/community4.jpg";

function FPVCommunity() {
    return (
        <section className="community-card">

            <h2>FPV COMMUNITY</h2>

            <p>
                Join the FPV pilots community
            </p>

            <div className="community-grid">

                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />

            </div>

            <button>
                JOIN COMMUNITY
            </button>

        </section>
    );
}

export default FPVCommunity;