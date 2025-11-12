import React from "react";
import "../ComponentStyles/Label.css";

export default function Label({ className, children, ...rest }) {
  return (
    <label className={`form-label ${className || ""}`} {...rest}>
      {children}
    </label>
  );
}
