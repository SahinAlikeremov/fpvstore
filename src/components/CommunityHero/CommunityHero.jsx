import "./CommunityHero.css";

import heroImage from "../../assets/images/communityHero.png";

function CommunityHero() {
    return (
        <section className="community-hero">

            <div className="community-hero-container">

                <div className="community-left">

                    <span className="community-tag">
                        FPV COMMUNITY
                    </span>

                    <h1>
                        FLY.
                        <br />
                        <span>LEARN.</span>
                        <br />
                        CONNECT.
                    </h1>

                    <p>
                        Join a growing FPV community where pilots share
                        experiences, showcase their builds, learn new
                        skills and inspire each other every day.
                    </p>

                </div>

                <div className="community-right">

                    <img
                        src={heroImage}
                        alt="FPV Community"
                    />

                </div>

            </div>

        </section>
    );
}

export default CommunityHero;