import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignupScreen.css";
import signupImg from "../assets/signup.png";
import axios from "axios";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    // Frontend empty check
    if (!username || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post("https://hand2handpwa-backend.onrender.com/api/auth/signup", {
        username,
        password,
        confirmPassword,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      setError("");
      navigate("/app/home");
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <img src={signupImg} alt="Sign Up" className="signup-img" />
      <h2 className="signup-heading">Create Account</h2>
      <p className="signup-subtext">to get started now!</p>

      <div className="signup-form">
        <input
          type="text"
          placeholder="User ID"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="signup-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
      </div>

      <p className="login-text">
        Already have an account?{" "}
        <span className="login-span" onClick={handleLogin}>
          Login now
        </span>
      </p>
    </div>
  );
};

export default SignupScreen;
