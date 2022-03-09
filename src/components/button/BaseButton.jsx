import React from "react";
import "./baseButton.css";

const BaseButton = ({ type, backgroundColor, onClick, label, ...props }) => {
  const mode =
    type === "confirm"
      ? "baseButton--primary"
      : type === "cancel"
      ? "baseButton--secondary"
      : "baseButton--third";

  return (
    <button
      type="button"
      onClick={onClick}
      className={["baseButton-button", mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default BaseButton;
