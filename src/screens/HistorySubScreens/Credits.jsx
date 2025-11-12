import React from "react";
import "../../styles/HistorySubScreensStyles/CreditsStyles.css";

export default function Credits({ data }) {
  return (
    <div className="credits-section">
      {data.map((item, i) => (
        <div className="credit-card" key={i}>
          <div className="credit-left">
            <div className="credit-icon up" />
          </div>
          <div className="credit-body">
            <div className="credit-title">{item.title}</div>
            <div className="credit-customer">Customer: {item.customer}</div>
            <div className="credit-meta">
              <span className="badge completed">{item.status}</span>
              <span className="credit-date">{item.date}</span>
            </div>
          </div>
          <div className="credit-amount">+{item.amount}</div>
        </div>
      ))}
    </div>
  );
}


