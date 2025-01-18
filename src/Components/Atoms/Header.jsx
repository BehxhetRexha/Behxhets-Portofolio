import React from "react";

function Header({ h1_class, text }) {
  return (
    <div className="Header">
      <h1 className={h1_class}>{text}</h1>
    </div>
  );
}

export default Header;
