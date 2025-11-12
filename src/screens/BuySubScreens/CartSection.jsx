import React from "react";
import {
  IoCartOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import CartItem from "../../Components/ComponentScreens/CartItem";
import "../../styles/BuySubScreensStyles/CartSectionStyles.css";

const CartSection = ({ cartItems, onIncrease, onDecrease, onRemove }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ✅ EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="empty-container">
        <IoCartOutline size={70} color="#5952e6" />
        <p className="empty-title">Your cart is empty</p>
        <p className="empty-sub">Start shopping for eco-friendly products</p>

        <button className="start-btn">
          <IoSparklesOutline size={18} color="#fff" />
          <span>Start Shopping</span>
        </button>
      </div>
    );
  }

  // ✅ FULL CART
  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={() => onIncrease(item.id)}
          onDecrease={() => onDecrease(item.id)}
          onRemove={() => onRemove(item.id)}
        />
      ))}

      {/* ✅ ORDER SUMMARY CARD */}
      <div className="summary-card">
        <h3 className="summary-title">Order Summary</h3>

        <div className="summary-row">
          <p>Subtotal</p>
          <p className="price">₹{total}</p>
        </div>

        <div className="summary-row">
          <p>Delivery</p>
          <p className="price">₹0</p>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-total">
          <p>Total</p>
          <p>₹{total}</p>
        </div>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSection;
