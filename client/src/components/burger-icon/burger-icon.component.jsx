import React from "react";

import "./burger-icon.styles.scss";

const BurgerIcon = ({ active }) => {
  return (
    <div className={`burger-icon ${active ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerIcon;
