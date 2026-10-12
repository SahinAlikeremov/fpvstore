import "./BrandCard.css";

import {
    FiArrowRight
} from "react-icons/fi";

import {
    useNavigate
} from "react-router-dom";

const images = import.meta.glob(
    "../../assets/images/*",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

function normalizeBrandName(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

function BrandCard({
    brand,
    products
}) {

    const navigate = useNavigate();

    const productCount =
        products?.length || 0;

    const normalizedBrand =
        normalizeBrandName(brand);

    const logoKey = Object.keys(images).find(
        (key) => {

            const fileName =
                key
                    .split("/")
                    .pop()
                    .split(".")[0];

            const normalizedFileName =
                normalizeBrandName(fileName);

            return (
                normalizedFileName ===
                    `${normalizedBrand}logo` ||
                normalizedFileName ===
                    normalizedBrand
            );
        }
    );

    const logo = logoKey
        ? images[logoKey]
        : null;

        console.log("BRAND:", brand);
console.log("LOGO KEY:", logoKey);
console.log("LOGO:", logo);

    const handleViewProducts = () => {

        navigate(
            `/products?brand=${encodeURIComponent(
                brand
            )}`
        );

    };

    return (
        <div className="brand-card">

            <div className="brand-logo">

                {logo && (
                    <img
                        src={logo}
                        alt={brand}
                    />
                )}

            </div>

            <div className="brand-content">

                <h3>
                    {brand}
                </h3>

                <p>
                    High-performance FPV products
                    designed for racing, freestyle and
                    long-range flights.
                </p>

                <span className="brand-products">

                    {productCount}{" "}

                    {productCount === 1
                        ? "Product"
                        : "Products"}

                </span>

                <button
                    className="brand-btn"
                    type="button"
                    onClick={handleViewProducts}
                >

                    View Products

                    <FiArrowRight />

                </button>

            </div>

        </div>
    );
}

export default BrandCard;