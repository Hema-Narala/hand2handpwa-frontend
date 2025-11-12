import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ProductCard from "../../Components/ComponentScreens/ProductCard";
import "../../styles/BuySubScreensStyles/ShopSectionStyles.css";

const ShopSection = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All products");

  const categories = [
    { id: "1", name: "All products", icon: "📦" },
    { id: "2", name: "Stationary", icon: "📚" },
    { id: "3", name: "Snacks", icon: "🍫" },
    { id: "4", name: "Electronics", icon: "📱" },
    { id: "5", name: "Eco products", icon: "🌿" },
    { id: "6", name: "Energy Bar", icon: "🏋️" },
  ];

  const products = [
    {
      id: "1",
      image:
        "https://img.freepik.com/free-photo/open-notebook-with-glasses_23-2147949753.jpg",
      title: "Eco-Friendly Notebook",
      description: "100% recycled paper",
      rating: 4.5,
      reviews: 128,
      price: 25,
      oldPrice: 35,
    },
    {
      id: "2",
      image:
        "https://img.freepik.com/free-photo/eco-friendly-reusable-water-bottle_53876-102805.jpg",
      title: "Reusable Bottle",
      description: "Stainless steel insulated",
      rating: 4.7,
      reviews: 210,
      price: 499,
      oldPrice: 650,
    },
  ];

  return (
    <div className="shop-section">
      {/* SEARCH BAR */}
      <div className="search-bar">
        <IoSearchOutline size={18} color="#666" />
        <input type="text" placeholder="Search eco-friendly products…" />
      </div>

      {/* CATEGORY SCROLL */}
      <div className="category-scroll">
        {categories.map((cat) => (
          <div key={cat.id} className="category-item">
            <button
              className={
                selectedCategory === cat.name
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon}
            </button>
            <p
              className={
                selectedCategory === cat.name ? "cat-label active" : "cat-label"
              }
            >
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddPress={() => onAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
