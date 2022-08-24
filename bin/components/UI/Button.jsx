import React from "react";

import "./Button.css";

const Button = ({ title, className, ...attributes }) => (
  <button className={`btn ${className}`} {...attributes}>
    {title}
  </button>
);

export default Button;