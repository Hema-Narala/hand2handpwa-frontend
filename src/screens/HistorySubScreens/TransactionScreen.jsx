import React, { useState } from "react";
import Credits from "../HistorySubScreens/Credits";
import Debits from "../HistorySubScreens/Debits";
import Pending from "../HistorySubScreens/Pending";
import "../../styles/HistorySubScreensStyles/TransactionScreenStyles.css";
import { DollarSign, ArrowDownCircle, Clock } from "lucide-react";

export default function TransactionScreen() {
  const [activeTab, setActiveTab] = useState(0);

  const creditsData = [
    { title: "House Renovation Job", customer: "Michael Chen", amount: 120, status: "completed", date: "Nov 10, 2025" },
    { title: "Cleaning Service", customer: "Emma Wilson", amount: 80, status: "completed", date: "Nov 9, 2025" },
    { title: "Carpentry Work", customer: "Robert Davis", amount: 150, status: "completed", date: "Nov 7, 2025" },
    { title: "Painting Job", customer: "Lisa Anderson", amount: 100, status: "completed", date: "Nov 6, 2025" },
  ];

  const debitsData = [
    { title: "House Renovation Job", customer: "Michael Chen", amount: 120, status: "paid", date: "Nov 10, 2025" },
    { title: "Cleaning Service", customer: "Emma Wilson", amount: 80, status: "paid", date: "Nov 9, 2025" },
    { title: "Carpentry Work", customer: "Robert Davis", amount: 150, status: "paid", date: "Nov 7, 2025" },
    { title: "Painting Job", customer: "Lisa Anderson", amount: 100, status: "paid", date: "Nov 6, 2025" },
  ];

  const pendingData = [
    { title: "Kitchen Remodeling", customer: "Sarah Parker", amount: 200, status: "in-progress", date: "Nov 11, 2025", progress: 60 },
    { title: "Garden Maintenance", customer: "David Kim", amount: 85, status: "in-progress", date: "Nov 11, 2025", progress: 30 },
    { title: "Furniture Assembly", customer: "Maria Garcia", amount: 60, status: "pending", date: "Nov 12, 2025", progress: 0 },
  ];

  return (
    <div className="transaction-screen">
        
      <div className="header-card">
        <button className="back-btn">←</button>
        <div className="header-text">
          <h3>Transaction History</h3>
          <p>Track all your earnings and expenses</p>
        </div>
      </div>

      <div className="status-row">
        {/* CREDIT */}
        <div className="status-box green">
            <div className="status-icon">
            <DollarSign size={16} color="#fff" />
            </div>
            <h4 className="status-title">Credit</h4>
            <p className="status-value">$150</p>
        </div>

        {/* DEBIT */}
        <div className="status-box red">
            <div className="status-icon">
            <ArrowDownCircle size={16} color="#fff" />
            </div>
            <h4 className="status-title">Debit</h4>
            <p className="status-value">$290</p>
        </div>

        {/* PENDING */}
        <div className="status-box yellow">
            <div className="status-icon">
            <Clock size={16} color="#fff" />
            </div>
            <h4 className="status-title">Pending</h4>
            <p className="status-value">$90</p>
        </div>
      </div>
        
      <div className="tabs">
        {['Credits','Debits','Pending'].map((t,i)=>(
          <button
            key={t}
            onClick={()=>setActiveTab(i)}
            className={activeTab===i?"active":""}
          >{t}</button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab===0 && <Credits data={creditsData} />}
        {activeTab===1 && <Debits data={debitsData} />}
        {activeTab===2 && <Pending data={pendingData} />}
      </div>
    </div>
  );
}