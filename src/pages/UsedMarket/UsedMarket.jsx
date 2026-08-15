import "./UsedMarket.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import UsedHero from "../../components/UsedHero/UsedHero";
import UsedFilters from "../../components/UsedFilters/UsedFilters";
import UsedProductGrid from "../../components/UsedProductGrid/UsedProductGrid";
import SellYourGear from "../../components/SellYourGear/SellYourGear";

function UsedMarket() {

    const [filters, setFilters] = useState({
        category: "all",
        brand: "all",
        condition: "all",
        price: "all",
        sort: "newest"
    });

    return (
        <>
            <Navbar />

            <UsedHero />

            <UsedFilters
                filters={filters}
                setFilters={setFilters}
            />

            <UsedProductGrid
                filters={filters}
            />

            <SellYourGear />

            <Footer />
        </>
    );
}

export default UsedMarket;