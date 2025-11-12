import React from "react";
import "../ComponentStyles/Textarea.css";

export default function Textarea({ className, ...rest }) {
  return (
    <textarea
      className={`textarea ${className || ""}`}
      {...rest}
    />
  );
}
