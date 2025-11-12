import React, { useState } from "react";
import { IoChevronBack, IoStorefrontOutline, IoCartOutline, IoClipboardOutline } from "react-icons/io5";
import ShopSection from "./ShopSection";
import CartSection from "./CartSection";
import OrdersSection from "./OrdersSection";
import "../../styles/BuySubScreensStyles/BuyScreenStyles.css";
import Header from "../../Components/ComponentScreens/Header";

const BuyScreen = ({ navigateBack }) => {
  const [selectedTab, setSelectedTab] = useState("shop");
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    const existing = cartItems.find((i) => i.id === product.id);
    let updated;

    if (existing) {
      updated = cartItems.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updated = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updated);
    setCartCount(updated.reduce((sum, i) => sum + i.quantity, 0));
  };

  const handleIncrease = (id) => {
    const updated = cartItems.map((i) =>
      i.id === id ? { ...i, quantity: i.quantity + 1 } : i
    );
    setCartItems(updated);
    setCartCount(updated.reduce((s, i) => s + i.quantity, 0));
  };

  const handleDecrease = (id) => {
    const updated = cartItems
      .map((i) =>
        i.id === id ? { ...i, quantity: Math.max(i.quantity - 1, 0) } : i
      )
      .filter((i) => i.quantity > 0);

    setCartItems(updated);
    setCartCount(updated.reduce((s, i) => s + i.quantity, 0));
  };

  const handleRemove = (id) => {
    const removedItem = cartItems.find((i) => i.id === id);
    const updated = cartItems.filter((i) => i.id !== id);

    setCartItems(updated);
    setCartCount((prev) =>
      prev - (removedItem?.quantity || 0) > 0
        ? prev - (removedItem?.quantity || 0)
        : 0
    );
  };

  return (
    <div className="eco-screen">
      {/* HEADER */}
      {/* <div className="header">
        <div className="left-section">
          <button className="back-btn" onClick={navigateBack}>
            <IoChevronBack size={24} color="#fff" />
          </button>
          <p className="title">Eco Store</p>
        </div>
      </div> */}
      <Header 
        heading="Buy Items"
        text="Buy tools, materials, and equipment"
        // onBack={goBack}
        onBack={() => console.log("Back button pressed")}
      />
      

      {/* TABS */}
      <div className="container">
        <div className="tab-container">
          <button
            className={selectedTab === "shop" ? "tab active" : "tab"}
            onClick={() => setSelectedTab("shop")}
          >
            <IoStorefrontOutline size={18} color={selectedTab === "shop" ? "#fff" : "#5952e6"} />
            <span>Shop</span>
          </button>

          <button
            className={selectedTab === "cart" ? "tab active" : "tab"}
            onClick={() => setSelectedTab("cart")}
          >
            <IoCartOutline size={18} color={selectedTab === "cart" ? "#fff" : "#5952e6"} />
            <span>Cart</span>
            <span className="cart-count">({cartCount})</span>
          </button>

          <button
            className={selectedTab === "orders" ? "tab active" : "tab"}
            onClick={() => setSelectedTab("orders")}
          >
            <IoClipboardOutline size={18} color={selectedTab === "orders" ? "#fff" : "#5952e6"} />
            <span>Orders</span>
          </button>
        </div>

        {/* CONTENT */}
        {selectedTab === "shop" && <ShopSection onAddToCart={handleAddToCart} />}
        {selectedTab === "cart" && (
          <CartSection
            cartItems={cartItems}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        )}
        {selectedTab === "orders" && <OrdersSection />}
      </div>
    </div>
  );
};

export default BuyScreen;
