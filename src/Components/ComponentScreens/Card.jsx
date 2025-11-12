import React from "react";
import "../ComponentStyles/Card.css";

export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}
