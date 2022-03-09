import React from "react";
import BaseButton from "./BaseButton";
import "./baseButton.css";

const ConfirmButton = ({ onClick, label = "Button" }) => {
  return <BaseButton label={label} onClick={onClick} type="confirm" />;
};

export default ConfirmButton;
