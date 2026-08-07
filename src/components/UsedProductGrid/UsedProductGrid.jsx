import "./UsedProductGrid.css";

import UsedProductCard from "../UsedProductCard/UsedProductCard";

function UsedProductGrid() {
    return (

        <section className="used-grid">

            <div className="used-grid-container">

                <UsedProductCard />
                <UsedProductCard />
                <UsedProductCard />
                <UsedProductCard />

                <UsedProductCard />
                <UsedProductCard />
                <UsedProductCard />
                <UsedProductCard />

            </div>

        </section>

    );
}

export default UsedProductGrid;