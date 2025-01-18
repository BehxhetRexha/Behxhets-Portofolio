import React from "react";

function Button({ onClick, btn_class, btn_name }) {
  return (
    <div className="Btn">
      <button onClick={onClick} className={btn_class}>
        {btn_name}
      </button>
    </div>
  );
}

export default Button;
