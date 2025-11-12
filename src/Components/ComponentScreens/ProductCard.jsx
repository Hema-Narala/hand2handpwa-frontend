import React from "react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "../ComponentStyles/ProductCard.css";

const ProductCard = ({ product, onAddPress }) => {
  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>

      {/* Content */}
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>

        <div className="product-price-row">
          <p className="product-price">${product.price}</p>

          <div className="product-rating">
            <AiFillStar size={16} color="#FFD700" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Location + Owner */}
        <div className="product-meta">
          <p><FaMapMarkerAlt size={12} color="#ff4d4d" /> Downtown</p>
          <p><FaUser size={12} color="#333" /> John Martinez</p>
        </div>

        {/* Add To Cart Button */}
        <button className="add-btn" onClick={onAddPress}>
          <span className="cart-icon">🛒</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
