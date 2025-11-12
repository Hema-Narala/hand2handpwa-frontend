import React from "react";
import "../../styles/HistorySubScreensStyles/PendingStyles.css";

export default function Pending({ data }) {
  return (
    <div className="pending-section">
      {data.map((item, i) => (
        <div className="pending-card" key={i}>
          <div className="pending-left">
            <div className="pending-icon clock" />
          </div>
          <div className="pending-body">
            <div className="pending-title">{item.title}</div>
            <div className="pending-customer">Customer: {item.customer}</div>
            <div className="pending-meta">
              <span className={`badge ${item.status}`}>{item.status}</span>
              <span className="pending-date">{item.date}</span>
            </div>
            <div className="progress-row">
              <span className="progress-label">Progress</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
              </div>
            </div>
          </div>
          <div className="pending-amount">${item.amount}</div>
        </div>
      ))}
    </div>
  );
}