import "./CommunityStats.css";

import {
    FiUsers,
    FiTarget,
    FiCamera,
    FiAward
} from "react-icons/fi";

function CommunityStats() {
    return (

        <section className="community-stats">

            <div className="community-stats-container">

                <div className="stat-card">

                    <FiUsers />

                    <h2>500+</h2>

                    <p>Community Members</p>

                </div>

                <div className="stat-card">

                    <FiTarget />

                    <h2>120+</h2>

                    <p>Drone Builds Shared</p>

                </div>

                <div className="stat-card">

                    <FiCamera />

                    <h2>850+</h2>

                    <p>FPV Photos</p>

                </div>

                <div className="stat-card">

                    <FiAward />

                    <h2>50+</h2>

                    <p>Experienced Pilots</p>

                </div>

            </div>

        </section>

    );
}

export default CommunityStats;