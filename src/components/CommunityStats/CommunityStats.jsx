import "./CommunityStats.css";

import { useEffect, useState } from "react";

import {
    FiUsers,
    FiTarget,
    FiCamera,
    FiAward
} from "react-icons/fi";


function CommunityStats() {

    const [stats, setStats] = useState({
        communityMembers: 0,
        droneBuilds: 0,
        fpvPhotos: 0,
        experiencedPilots: 0
    });

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetch("http://localhost:8080/api/community/stats")

            .then((response) => {

                if (!response.ok) {

                    throw new Error(
                        "Community stats could not be loaded"
                    );

                }

                return response.json();

            })

            .then((data) => {

                setStats(data);

            })

            .catch((error) => {

                console.error(
                    "Community stats error:",
                    error
                );

            })

            .finally(() => {

                setLoading(false);

            });

    }, []);


    return (

        <section className="community-stats">

            <div className="community-stats-container">


                <div className="stat-card">

                    <FiUsers />

                    <h2>
                        {loading
                            ? "..."
                            : `${stats.communityMembers}+`
                        }
                    </h2>

                    <p>
                        Community Members
                    </p>

                </div>


                <div className="stat-card">

                    <FiTarget />

                    <h2>
                        {loading
                            ? "..."
                            : `${stats.droneBuilds}+`
                        }
                    </h2>

                    <p>
                        Drone Builds Shared
                    </p>

                </div>


                <div className="stat-card">

                    <FiCamera />

                    <h2>
                        {loading
                            ? "..."
                            : `${stats.fpvPhotos}+`
                        }
                    </h2>

                    <p>
                        FPV Photos
                    </p>

                </div>


                <div className="stat-card">

                    <FiAward />

                    <h2>
                        {loading
                            ? "..."
                            : `${stats.experiencedPilots}+`
                        }
                    </h2>

                    <p>
                        Experienced Pilots
                    </p>

                </div>


            </div>

        </section>

    );
}

export default CommunityStats;