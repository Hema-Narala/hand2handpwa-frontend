import React, { useState, useEffect } from "react";
import "../ComponentStyles/BottomTabNavigator.css";
import {
  FiBookOpen,
  FiTag,
  FiHome,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { FaBookOpen,FaHome, FaUser, FaShoppingCart, FaTag } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const BottomTabNavigator = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    // sync active with path on mount/route change
    if (pathname.startsWith("/app/bookings")) setActive("bookings");
    else if (pathname.startsWith("/app/sell")) setActive("sell");
    else if (pathname.startsWith("/app/buy")) setActive("buy");
    else if (pathname.startsWith("/app/profile")) setActive("profile");
    else setActive("home");
  }, [pathname]);

  const handle = (tab, path) => {
    setActive(tab);
    navigate(path);
  };

  return (
    <nav className="bottom-tab">
      <button
        className={`tab-item ${active === "bookings" ? "active" : ""}`}
        onClick={() => handle("bookings", "/app/bookings")}
      >
        <FaBookOpen size={23} />
        <span className="tab-label">Bookings</span>
      </button>

      <button
        className={`tab-item ${active === "sell" ? "active" : ""}`}
        onClick={() => handle("sell", "/app/sell")}
      >
        <FaTag size={23} />
        <span className="tab-label">Sell</span>
      </button>

      {/* center special home */}
      <button
        className={`tab-home ${active === "home" ? "home-selected" : ""}`}
        onClick={() => handle("home", "/app/home")}
      >
        <div className="home-circle">
          <FaHome className={`home-icon ${active === "home" ? "on" : ""}`} />
        </div>
      </button>

      <button
        className={`tab-item ${active === "buy" ? "active" : ""}`}
        onClick={() => handle("buy", "/app/buy")}
      >
        <FaShoppingCart size={23} />
        <span className="tab-label">Buy</span>
      </button>

      <button
        className={`tab-item ${active === "profile" ? "active" : ""}`}
        onClick={() => handle("profile", "/app/profile")}
      >
        <FaUser size={23} />
        <span className="tab-label">Profile</span>
      </button>
    </nav>
  );
};

export default BottomTabNavigator;
