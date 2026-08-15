import "./About.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
    FiShoppingBag,
    FiUsers,
    FiTool,
    FiMapPin
} from "react-icons/fi";

function About() {

    return (

        <>

            <Navbar />

            <main className="about-page">

                <section className="about-hero">

                    <div className="about-hero-content">

                        <span>
                            ABOUT FPVSTORE.AZ
                        </span>

                        <h1>
                            Built For
                            <br />
                            <strong>FPV Pilots.</strong>
                        </h1>

                        <p>
                            FPVStore.az is an Azerbaijan-based FPV marketplace
                            created for pilots who want quality equipment,
                            trusted products and a real local FPV community.
                        </p>

                    </div>

                </section>

                <section className="about-story">

                    <div className="about-story-container">

                        <div className="about-story-title">

                            <span>
                                OUR STORY
                            </span>

                            <h2>
                                More Than Just
                                <br />
                                An FPV Store
                            </h2>

                        </div>

                        <div className="about-story-text">

                            <p>
                                FPVStore.az is a new and growing FPV marketplace in Azerbaijan.
                                We are just getting started, and our goal is to build a trusted
                                place where local pilots can find quality FPV equipment and support.
                            </p>

                            <p>
                                Our product selection is growing step by step. As FPVStore.az
                                grows, we will continue adding more batteries, motors, frames,
                                electronics, drones, accessories and other FPV products.
                            </p>

                            <p>
                                We also believe that FPV is about more than buying equipment.
                                It is about building, flying, learning and connecting with other
                                pilots. We want FPVStore.az to grow together with the Azerbaijani
                                FPV community.
                            </p>

                        </div>

                    </div>

                </section>

                <section className="about-features">

                    <div className="about-features-container">

                        <div className="about-feature-card">

                            <div className="about-feature-icon">
                                <FiShoppingBag />
                            </div>

                            <h3>
                                FPV Products
                            </h3>

                            <p>
                                Racing, freestyle, long-range and other FPV
                                equipment selected for local pilots.
                            </p>

                        </div>

                        <div className="about-feature-card">

                            <div className="about-feature-icon">
                                <FiUsers />
                            </div>

                            <h3>
                                FPV Community
                            </h3>

                            <p>
                                A place where pilots can connect, share builds,
                                learn and discover new flying experiences.
                            </p>

                        </div>

                        <div className="about-feature-card">

                            <div className="about-feature-icon">
                                <FiTool />
                            </div>

                            <h3>
                                Technical Support
                            </h3>

                            <p>
                                Help with FPV components, builds, setup and
                                technical questions when you need it.
                            </p>

                        </div>

                        <div className="about-feature-card">

                            <div className="about-feature-icon">
                                <FiMapPin />
                            </div>

                            <h3>
                                Based In Baku
                            </h3>

                            <p>
                                Local pickup in Baku with Bolt Send available
                                when delivery is requested.
                            </p>

                        </div>

                    </div>

                </section>

                <section className="about-cta">

                    <div className="about-cta-box">

                        <span>
                            READY TO FLY?
                        </span>

                        <h2>
                            Find Your Next
                            <br />
                            FPV Setup
                        </h2>

                        <p>
                            Explore our products and discover everything you
                            need for your next build or flight.
                        </p>

                        <a
                            href="/products"
                            className="about-cta-button"
                        >
                            Explore Products
                        </a>

                    </div>

                </section>

            </main>

            <Footer />

        </>

    );

}

export default About;