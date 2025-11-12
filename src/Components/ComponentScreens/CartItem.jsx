import React from "react";
import { IoAddOutline, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";
import "../ComponentStyles/CartItem.css";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-card">
      {/* PRODUCT IMAGE */}
      <img src={item.image} alt={item.title} className="cart-img" />

      {/* DETAILS */}
      <div className="cart-details">
        <p className="cart-title">{item.title}</p>
        <p className="cart-desc">{item.description}</p>

        <div className="cart-price-row">
          <p className="cart-price">₹{item.price}</p>
          <p className="cart-old-price">₹{item.oldPrice}</p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="cart-right">
        <p className="cart-amount">₹{item.price * item.quantity}</p>

        {/* QUANTITY CONTROLS */}
        <div className="cart-qty-box">
          <button className="qty-btn" onClick={onDecrease}>
            <IoRemoveOutline size={20} />
          </button>

          <p className="qty-value">{item.quantity}</p>

          <button className="qty-btn" onClick={onIncrease}>
            <IoAddOutline size={20} />
          </button>
        </div>

        {/* DELETE BUTTON */}
        <button className="delete-btn" onClick={onRemove}>
          <IoTrashOutline size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
