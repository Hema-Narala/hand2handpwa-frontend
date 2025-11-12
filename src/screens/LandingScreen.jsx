import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingScreen.css";
import img1 from "../assets/img1.png";

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <img src={img1} alt="App Logo" className="landing-logo" />
      <h1 className="landing-title">Hand2Hand</h1>
      <p className="landing-subtitle">
        Get work, Get Worker
      </p>

      <div className="button-group">
        <button className="landing-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="landing-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
