import React from "react";
import "../ComponentStyles/Button.css";

export default function Button({
  children,
  variant = "default", // default, outline, ghost
  size = "default", // default, sm, lg
  className = "",
  ...props
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
