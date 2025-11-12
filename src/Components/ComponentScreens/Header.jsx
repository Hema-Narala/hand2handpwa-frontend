import React from "react";
import { IoChevronBack } from "react-icons/io5";
import "../ComponentStyles/Header.css";

export default function Header({ heading, text, onBack }) {
  return (
    <header className="sell-hero">
      <button className="back-btn" onClick={() => window.history.back()}>
        <IoChevronBack size={24} color="#fff" />
      </button>

      <div className="header-text">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </header>
  );
}
