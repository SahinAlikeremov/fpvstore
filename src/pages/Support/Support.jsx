import "./Support.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import SupportHero from "../../components/SupportHero/SupportHero";
import SupportOptions from "../../components/SupportOptions/SupportOptions";
import FAQ from "../../components/FAQ/FAQ";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import SupportCTA from "../../components/SupportCTA/SupportCTA";

function Support() {
    return (
        <>

            <Navbar />

            <SupportHero />

            <SupportOptions />

            <FAQ />

            <ContactForm />

            <ContactInfo />

            <SupportCTA />

            <Footer />

        </>
    );
}

export default Support;