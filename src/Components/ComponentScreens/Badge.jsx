// Badge.jsx
import React from "react";
import "../ComponentStyles/Badge.css";

export default function Badge({ children, variant = "default", className = "", ...rest }) {
  return (
    <span className={`badge badge-${variant} ${className}`} {...rest}>
      {children}
    </span>
  );
}