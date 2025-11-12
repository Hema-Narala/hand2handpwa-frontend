import React, { forwardRef } from "react";
import "../ComponentStyles/Input.css";

const Input = forwardRef(function Input({ className = "", type, ...props }, ref) {
  return (
    <input
      type={type}
      ref={ref}
      className={`input-field ${className}`}
      {...props}
    />
  );
});

export default Input;
