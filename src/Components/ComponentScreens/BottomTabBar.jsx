import React, { useState } from "react";
import "../ComponentStyles/BottomTabBar.css";
import { FaHome, FaUser, FaSearch, FaBell, FaCog } from "react-icons/fa";

const BottomTabBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tab-bar">
      <div
        className={`tab-item ${activeTab === "search" ? "active" : ""}`}
        onClick={() => setActiveTab("search")}
      >
        <FaSearch />
      </div>
      <div
        className={`tab-item ${activeTab === "notifications" ? "active" : ""}`}
        onClick={() => setActiveTab("notifications")}
      >
        <FaBell />
      </div>
      <div
        className={`tab-item home-circle ${activeTab === "home" ? "active-home" : ""}`}
        onClick={() => setActiveTab("home")}
      >
        <FaHome />
      </div>
      <div
        className={`tab-item ${activeTab === "profile" ? "active" : ""}`}
        onClick={() => setActiveTab("profile")}
      >
        <FaUser />
      </div>
      <div
        className={`tab-item ${activeTab === "settings" ? "active" : ""}`}
        onClick={() => setActiveTab("settings")}
      >
        <FaCog />
      </div>
    </div>
  );
};

export default BottomTabBar;
