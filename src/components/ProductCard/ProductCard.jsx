import "./ProductCard.css";

import {
  FiHeart,
  FiShoppingCart,
  FiStar
} from "react-icons/fi";

function ProductCard({
  image,
  badge,
  brand,
  title,
  price,
  oldPrice,
  rating,
  reviews
}) {
  return (
    <div className="product-card">

      {badge && (
        <div className="product-badge">
          {badge}
        </div>
      )}

      <button className="wishlist-btn">
        <FiHeart />
      </button>

      <div className="product-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <div className="product-content">

        <span className="product-brand">
          {brand}
        </span>

        <h3>
          {title}
        </h3>

        <div className="product-rating">

          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />

          <span>({reviews})</span>

        </div>

        <div className="product-price">

          <h2>₼{price}</h2>

          {oldPrice && (
            <span>₼{oldPrice}</span>
          )}

        </div>

        <button className="cart-btn">

          <FiShoppingCart />

          Add To Cart

        </button>

      </div>

    </div>
  );
}

export default ProductCard;