import "./ProductFilters.css";

import { FiGrid, FiList } from "react-icons/fi";

function ProductFilters({
    filters,
    setFilters,
    productCount
}) {

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFilters((current) => ({
            ...current,
            [name]: value
        }));

    };

    return (
        <section>

            <div className="filters-header">

                <div className="filters-left">

                    <h2>
                        All Products
                    </h2>

                </div>

                <div className="filters-right">

                    <span>
                        {productCount} Products
                    </span>

                    <button type="button">
                        <FiGrid />
                    </button>

                    <button type="button">
                        <FiList />
                    </button>

                </div>

            </div>

            <div className="filters">

                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                >
                    <option value="all">
                        All Categories
                    </option>

                    <option value="Racing">
                        Racing
                    </option>

                    <option value="Freestyle">
                        Freestyle
                    </option>

                    <option value="Long Range">
                        Long Range
                    </option>

                    <option value="Cinewhoop">
                        Cinewhoop
                    </option>

                    <option value="Tinywhoop">
                        Tinywhoop
                    </option>

                </select>

                <select
                    name="brand"
                    value={filters.brand}
                    onChange={handleChange}
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

                    <option value="RushFPV">
                        RushFPV
                    </option>

                    <option value="HDZero">
                        HDZero
                    </option>

                    <option value="T-Hobby">
                        T-Hobby
                    </option>

                    <option value="Ovonic">
                        Ovonic
                    </option>

                    <option value="Gemfan">
                        Gemfan
                    </option>

                    <option value="Tattu">
                        Tattu
                    </option>

                    <option value="RadioMaster">
                        RadioMaster
                    </option>

                </select>

                <select
                    name="price"
                    value={filters.price}
                    onChange={handleChange}
                >
                    <option value="all">
                        Price
                    </option>

                    <option value="low">
                        Low → High
                    </option>

                    <option value="high">
                        High → Low
                    </option>

                    <option value="under100">
                        Under ₼100
                    </option>

                    <option value="100-300">
                        ₼100 - ₼300
                    </option>

                    <option value="over300">
                        ₼300+
                    </option>

                </select>

                <select
                    name="sort"
                    value={filters.sort}
                    onChange={handleChange}
                >
                    <option value="newest">
                        Newest
                    </option>

                    <option value="popular">
                        Popular
                    </option>

                    <option value="rating">
                        Best Rating
                    </option>

                </select>

            </div>

        </section>
    );
}

export default ProductFilters;