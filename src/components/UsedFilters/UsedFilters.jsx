import "./UsedFilters.css";

function UsedFilters({
    filters,
    setFilters
}) {

    const handleChange = (filterName, value) => {

        setFilters((current) => ({
            ...current,
            [filterName]: value
        }));

    };

    return (
        <section className="used-filters">

            <div className="used-filters-container">

                <select
                    value={filters.category}
                    onChange={(e) =>
                        handleChange(
                            "category",
                            e.target.value
                        )
                    }
                >
                    <option value="all">
                        All Categories
                    </option>

                    <option value="Drones">
                        Drones
                    </option>

                    <option value="Motors">
                        Motors
                    </option>

                    <option value="Frames">
                        Frames
                    </option>

                    <option value="Batteries">
                        Batteries
                    </option>

                    <option value="ESC & FC">
                        ESC & FC
                    </option>

                    <option value="Cameras">
                        Cameras
                    </option>

                    <option value="VTX">
                        VTX
                    </option>

                    <option value="Receivers">
                        Receivers
                    </option>
                </select>


                <select
                    value={filters.brand}
                    onChange={(e) =>
                        handleChange(
                            "brand",
                            e.target.value
                        )
                    }
                >
                    <option value="all">
                        All Brands
                    </option>

                    <option value="DJI">
                        DJI
                    </option>

                    <option value="T-Motor">
                        T-Motor
                    </option>

                    <option value="SpeedyBee">
                        SpeedyBee
                    </option>

                    <option value="Ovonic">
                        Ovonic
                    </option>

                    <option value="GEPRC">
                        GEPRC
                    </option>

                    <option value="RadioMaster">
                        RadioMaster
                    </option>
                </select>


                <select
                    value={filters.condition}
                    onChange={(e) =>
                        handleChange(
                            "condition",
                            e.target.value
                        )
                    }
                >
                    <option value="all">
                        All Conditions
                    </option>

                    <option value="Used">
                        Used
                    </option>

                    <option value="Used-Like New">
                        Used-Like New
                    </option>

                    <option value="Excellent">
                        Excellent
                    </option>

                    <option value="Good">
                        Good
                    </option>
                </select>


                <select
                    value={filters.price}
                    onChange={(e) =>
                        handleChange(
                            "price",
                            e.target.value
                        )
                    }
                >
                    <option value="all">
                        Price
                    </option>

                    <option value="0-100">
                        ₼0 - ₼100
                    </option>

                    <option value="100-300">
                        ₼100 - ₼300
                    </option>

                    <option value="300-700">
                        ₼300 - ₼700
                    </option>

                    <option value="700+">
                        ₼700+
                    </option>
                </select>


                <select
                    value={filters.sort}
                    onChange={(e) =>
                        handleChange(
                            "sort",
                            e.target.value
                        )
                    }
                >
                    <option value="newest">
                        Newest
                    </option>

                    <option value="oldest">
                        Oldest
                    </option>

                    <option value="low">
                        Lowest Price
                    </option>

                    <option value="high">
                        Highest Price
                    </option>
                </select>

            </div>

        </section>
    );
}

export default UsedFilters;