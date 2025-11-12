import React from "react";
import { IoCheckmarkCircle, IoCubeOutline } from "react-icons/io5";
import "../../styles/BuySubScreensStyles/OrdersSectionStyles.css";

const OrdersSection = () => {
  const orders = [
    {
      id: "SCRAP001",
      status: "Delivered",
      date: "10/01/2024",
      total: 65,
      itemsCount: 2,
      items: [
        { name: "Eco-Friendly Notebook", qty: 2, price: 50 },
        { name: "Bamboo Pen Set", qty: 1, price: 15 },
      ],
    },
  ];

  return (
    <div className="orders-list">
      {orders.map((item) => (
        <div className="order-card" key={item.id}>
          <div className="order-header">
            <p className="order-id">Order #{item.id}</p>

            <div
              className={
                item.status === "Delivered"
                  ? "status delivered"
                  : "status dispatched"
              }
            >
              {item.status === "Delivered" ? (
                <IoCheckmarkCircle size={14} color="#5952e6" />
              ) : (
                <IoCubeOutline size={14} color="#007BFF" />
              )}
              <span>{item.status}</span>
            </div>

            <p className="order-total">₹{item.total}</p>
          </div>

          <div className="date-row">
            <p>{item.date}</p>
            <p>{item.itemsCount} items</p>
          </div>

          <div className="items-box">
            {item.items.map((product, i) => (
              <div className="item-row" key={i}>
                <p>
                  {product.name} <span className="qty">×{product.qty}</span>
                </p>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>

          <div className="buttons-row">
            {/* <button className="track-btn">
              <IoCubeOutline size={16} color="#5952e6" />
              <span>Track Order</span>
            </button> */}

            <button className="reorder-btn">
              <span>Reorder Items</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersSection;
