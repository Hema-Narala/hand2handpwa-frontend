import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginScreen.css";
import loginImg from "../assets/login.png"; // make sure this exists
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    // Check empty inputs
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password
      });

      // Successful login: store token and navigate
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);
      setError("");
      navigate("/app/home");
    } catch (err) {
      // Invalid credentials or server error
      setError(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="login-container">

      <img src={loginImg} alt="Login" className="login-img" />

      <h2 className="login-heading">Welcome</h2>
      <p className="login-subtext">Glad to see you!</p>

      <div className="login-form">
        <input
          type="text"
          placeholder="User ID"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <div className="password-wrapper">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FiEye /> : <FiEyeOff />}
          </span>
        </div>

        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>

      <p className="signup-text">
        Don't have an account?{" "}
        <span className="signup-span" onClick={handleSignUp}>
          Signup now
        </span>
      </p>

    </div>
  );
};

export default LoginScreen;
