import "./ProductFilters.css";
import { FiGrid, FiList } from "react-icons/fi";

function ProductFilters() {
  return (
    <section className="product-filters">

      <div className="filters-header">

        <div className="filters-left">
          <h2>All Products</h2>
        </div>

        <div className="filters-right">
          <span>248 Products</span>

          <button>
            <FiGrid />
          </button>

          <button>
            <FiList />
          </button>
        </div>

      </div>

      <div className="filters">

        <select>
          <option>All Categories</option>
          <option>Racing</option>
          <option>Freestyle</option>
          <option>Long Range</option>
          <option>Cinewhoop</option>
          <option>Tinywhoop</option>
        </select>

        <select>
          <option>All Brands</option>
          <option>DJI</option>
          <option>T-Motor</option>
          <option>SpeedyBee</option>
          <option>RushFPV</option>
          <option>HDZero</option>
        </select>

        <select>
          <option>Price</option>
          <option>Low → High</option>
          <option>High → Low</option>
        </select>

        <select>
          <option>Newest</option>
          <option>Popular</option>
          <option>Best Rating</option>
        </select>

      </div>

    </section>
  );
}

export default ProductFilters;