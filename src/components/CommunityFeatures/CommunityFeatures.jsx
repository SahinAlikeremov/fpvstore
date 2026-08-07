import "./CommunityFeatures.css";

import {
    FiUsers,
    FiBookOpen,
    FiCamera,
    FiAward
} from "react-icons/fi";

function CommunityFeatures() {
    return (

        <section className="community-features">

            <div className="community-title">

                <span>WHY OUR COMMUNITY</span>

                <h2>
                    More Than Just Flying
                </h2>

                <p>
                    FPVStore.az is a place where pilots connect,
                    learn, share experiences and inspire each
                    other every day.
                </p>

            </div>

            <div className="community-features-grid">

                <div className="feature-card">

                    <div className="feature-icon">
                        <FiUsers />
                    </div>

                    <h3>Friendly Community</h3>

                    <p>
                        Meet passionate FPV pilots and build
                        friendships across Azerbaijan.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">
                        <FiBookOpen />
                    </div>

                    <h3>Learn Faster</h3>

                    <p>
                        Improve your flying skills through
                        tutorials, tips and community support.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">
                        <FiCamera />
                    </div>

                    <h3>Share Builds</h3>

                    <p>
                        Show your latest FPV builds and inspire
                        other pilots with your creativity.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">
                        <FiAward />
                    </div>

                    <h3>Grow Together</h3>

                    <p>
                        Help the FPV community become stronger
                        every single day.
                    </p>

                </div>

            </div>

        </section>

    );
}

export default CommunityFeatures;