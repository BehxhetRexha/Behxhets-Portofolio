import React from "react";
import Header from "../Atoms/Header";
import Paragraph from "../Atoms/Paragraph";
function HP({ hp_class, h1_class, text, para_class, para }) {
  return (
    <div className={hp_class}>
      <Header h1_class={h1_class} text={text} />
      <Paragraph para_class={para_class} para={para} />
    </div>
  );
}

export default HP;
