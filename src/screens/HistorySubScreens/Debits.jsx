import React from "react";
import "../../styles/HistorySubScreensStyles/DebitsStyles.css";

export default function Debits({ data }) {
  return (
    <div className="debits-section">
      {data.map((item, i) => (
        <div className="debit-card" key={i}>
          <div className="debit-left">
            <div className="debit-icon down" />
          </div>
          <div className="debit-body">
            <div className="debit-title">{item.title}</div>
            <div className="debit-customer">Customer: {item.customer}</div>
            <div className="debit-meta">
              <span className="badge completed">{item.status}</span>
              <span className="debit-date">{item.date}</span>
            </div>
          </div>
          <div className="debit-amount">-${item.amount}</div>
        </div>
      ))}
    </div>
  );
}
