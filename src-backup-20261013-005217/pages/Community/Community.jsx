import "./Community.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import CommunityHero from "../../components/CommunityHero/CommunityHero";
import CommunityStats from "../../components/CommunityStats/CommunityStats";
import CommunityFeatures from "../../components/CommunityFeatures/CommunityFeatures";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";
import CommunityCTA from "../../components/CommunityCTA/CommunityCTA";

function Community() {
    return (
        <>
            <Navbar />

            <CommunityHero />

            <CommunityStats />

            <CommunityFeatures />

            <Gallery />

            <Testimonials />

            <CommunityCTA />

            <Footer />
        </>
    );
}

export default Community;