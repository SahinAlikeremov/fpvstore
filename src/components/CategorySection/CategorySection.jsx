import "./CategorySection.css";

import { useNavigate } from "react-router-dom";

import racing from "../../assets/images/racing.webp";
import freestyle from "../../assets/images/freestyle.png";
import longRange from "../../assets/images/lngrange.webp";
import cinewhoop from "../../assets/images/cnwhp.webp";
import tinywhoop from "../../assets/images/tinywhoop.webp";

const categories = [
    {
        title: "RACING",
        subtitle: "High Performance",
        image: racing,
        className: "racing",
        category: "Racing"
    },
    {
        title: "FREESTYLE",
        subtitle: "Unleash Your Style",
        image: freestyle,
        className: "freestyle",
        category: "Freestyle"
    },
    {
        title: "LONG RANGE",
        subtitle: "Explore Further",
        image: longRange,
        className: "long-range",
        category: "Long Range"
    },
    {
        title: "CINEWHOOP",
        subtitle: "Smooth Cinematics",
        image: cinewhoop,
        className: "cinewhoop",
        category: "Cinewhoop"
    },
    {
        title: "TINYWHOOP",
        subtitle: "Small But Mighty",
        image: tinywhoop,
        className: "tinywhoop",
        category: "Tinywhoop"
    }
];

function CategorySection() {

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(
            `/products?category=${encodeURIComponent(category)}`
        );
    };

    return (
        <section className="categories">

            <div className="categories-container">

                <div className="section-title">
                    <h2>SHOP BY CATEGORY</h2>
                    <span></span>
                </div>

                <div className="categories-grid">

                    {categories.map((category) => (

                        <button
                            key={category.title}
                            type="button"
                            className={`category-card ${category.className}`}
                            style={{
                                backgroundImage: `url(${category.image})`
                            }}
                            onClick={() =>
                                handleCategoryClick(
                                    category.category
                                )
                            }
                        >

                            <div className="category-overlay"></div>

                            <div className="category-content">

                                <h3>
                                    {category.title}
                                </h3>

                                <p>
                                    {category.subtitle}
                                </p>

                            </div>

                        </button>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default CategorySection;