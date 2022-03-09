import React from "react";
import BaseButton from "./BaseButton";
import "./baseButton.css";

const CancelButton = ({ onClick, label = "Button" }) => {
  return <BaseButton label={label} onClick={{ onClick }} type="cancel" />;
};

export default CancelButton;
