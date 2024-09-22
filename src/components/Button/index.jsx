import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${className}`}>{children}</button>
  );
};

export default Button;
