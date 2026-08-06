import "./UsedFilters.css";

function UsedFilters() {
    return (
        <section className="used-filters">

            <div className="used-filters-container">

                <select>

                    <option>All Categories</option>
                    <option>Drones</option>
                    <option>Motors</option>
                    <option>Frames</option>
                    <option>Batteries</option>
                    <option>ESC & FC</option>
                    <option>Cameras</option>
                    <option>VTX</option>
                    <option>Receivers</option>

                </select>

                <select>

                    <option>All Brands</option>
                    <option>DJI</option>
                    <option>T-Motor</option>
                    <option>SpeedyBee</option>
                    <option>Ovonic</option>
                    <option>GEPRC</option>
                    <option>RadioMaster</option>

                </select>

                <select>

                    <option>Condition</option>
                    <option>Brand New</option>
                    <option>Like New</option>
                    <option>Used</option>

                </select>

                <select>

                    <option>Price</option>
                    <option>₼0 - ₼100</option>
                    <option>₼100 - ₼300</option>
                    <option>₼300 - ₼700</option>
                    <option>₼700+</option>

                </select>

                <select>

                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>

                </select>

            </div>

        </section>
    );
}

export default UsedFilters;