// History.jsx
import React, { useState } from "react";
import "../styles/HistorySubScreensStyles/History.css";
import Card from "../../Components/ComponentScreens/Card";
import Badge from "../../Components/ComponentScreens/Badge";
import Header from "../../Components/ComponentScreens/Header";

import { TrendingUp, TrendingDown, Clock } from "lucide-react";

const creditTransactions = [
  { id: 1, description: "House Renovation Job", customer: "Michael Chen", amount: 120, date: "Nov 10, 2025", status: "completed" },
  { id: 2, description: "Cleaning Service", customer: "Emma Wilson", amount: 80, date: "Nov 9, 2025", status: "completed" },
  { id: 3, description: "Carpentry Work", customer: "Robert Davis", amount: 150, date: "Nov 7, 2025", status: "completed" },
  { id: 4, description: "Painting Job", customer: "Lisa Anderson", amount: "100", date: "Nov 6, 2025", status: "completed" },
  { id: 5, description: "Plumbing Repair", customer: "James Wilson", amount: 90, date: "Nov 5, 2025", status: "completed" }
];

const debitTransactions = [
  { id: 1, description: "Platform Service Fee", amount: 50, date: "Nov 8, 2025", status: "paid" },
  { id: 2, description: "Tools Purchase", amount: 75, date: "Nov 4, 2025", status: "paid" },
  { id: 3, description: "Premium Subscription", amount: 20, date: "Nov 1, 2025", status: "paid" },
  { id: 4, description: "Background Verification", amount: 15, date: "Oct 28, 2025", status: "paid" }
];

const pendingTransactions = [
  { id: 1, description: "Kitchen Remodeling", customer: "Sarah Parker", amount: 200, date: "Nov 11, 2025", status: "in-progress", progress: 60 },
  { id: 2, description: "Garden Maintenance", customer: "David Kim", amount: 85, date: "Nov 11, 2025", status: "in-progress", progress: 30 },
  { id: 3, description: "Furniture Assembly", customer: "Maria Garcia", amount: 60, date: "Nov 12, 2025", status: "pending", progress: 0 }
];

export function History() {
  const [activeTab, setActiveTab] = useState("credits");

  const getTransactions = () => {
    if (activeTab === "credits") return creditTransactions;
    if (activeTab === "debits") return debitTransactions;
    if (activeTab === "pending") return pendingTransactions;
    return [];
  };

  return (
    <div className="history-wrapper">
      {/* Header */}
      {/* <div className="history-header">
        <h2>Transaction History</h2>
        <p>Track all your earnings and expenses</p>
      </div> */}
      <Header 
        heading="Transaction History"
        text="Track all your earnings and expenses"
        // onBack={goBack}
        onBack={() => console.log("Back button pressed")}
      />

      <div className="history-content">
        {/* Summary Cards */}
        <div className="history-summary-grid">
          <Card className="summary-card success-border">
            <div className="summary-icon success-bg">
              <TrendingUp size={20} className="success-text" />
            </div>
            <p className="summary-label">Credits</p>
            <h3 className="summary-value success-text">
              ${creditTransactions.reduce((s, t) => s + t.amount, 0)}
            </h3>
          </Card>

          <Card className="summary-card destructive-border">
            <div className="summary-icon destructive-bg">
              <TrendingDown size={20} className="destructive-text" />
            </div>
            <p className="summary-label">Debits</p>
            <h3 className="summary-value destructive-text">
              ${debitTransactions.reduce((s, t) => s + t.amount, 0)}
            </h3>
          </Card>

          <Card className="summary-card accent-border">
            <div className="summary-icon accent-bg">
              <Clock size={20} className="accent-text" />
            </div>
            <p className="summary-label">Pending</p>
            <h3 className="summary-value accent-text">
              ${pendingTransactions.reduce((s, t) => s + t.amount, 0)}
            </h3>
          </Card>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === "credits" ? "active" : ""}`}
            onClick={() => setActiveTab("credits")}
          >Credits</button>

          <button
            className={`tab-btn ${activeTab === "debits" ? "active" : ""}`}
            onClick={() => setActiveTab("debits")}
          >Debits</button>

          <button
            className={`tab-btn ${activeTab === "pending" ? "active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >Pending</button>
        </div>

        {/* Transaction List */}
        <div className="transaction-list">
          {getTransactions().map((transaction) => (
            <Card key={transaction.id} className="transaction-card">
              <div className="transaction-left">
                <div className={`transaction-icon ${activeTab}-icon-bg`}>
                  {activeTab === "credits" && <TrendingUp />}
                  {activeTab === "debits" && <TrendingDown />}
                  {activeTab === "pending" && <Clock />}
                </div>
              </div>

              <div className="transaction-middle">
                <h4>{transaction.description}</h4>

                {transaction.customer && (
                  <p className="transaction-customer">
                    Customer: {transaction.customer}
                  </p>
                )}

                <div className="transaction-status-row">
                  <Badge
                    variant={transaction.status === "in-progress" ? "default" : "secondary"}
                    className="transaction-badge"
                  >
                    {transaction.status}
                  </Badge>
                  <span className="transaction-date">{transaction.date}</span>
                </div>

                {transaction.progress >= 0 && activeTab === "pending" && (
                  <div className="progress-container">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span>{transaction.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${transaction.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="transaction-right">
                <p className={`${activeTab}-text`}>{activeTab === "debits" ? "-" : "+"}${transaction.amount}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}




