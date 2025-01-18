import React from "react";
import Header from "../Atoms/Header";

function HH({ text }) {
  return (
    <div className="HH">
      <Header h1_class="hh-text" text={text} />
      <hr></hr>
    </div>
  );
}

export default HH;
