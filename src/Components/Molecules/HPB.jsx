import React from "react";
import Header from "../Atoms/Header";
import Paragraph from "../Atoms/Paragraph";
import Button from "../Atoms/Button";
function HPB({ h1_class, text, para_class, para, btn_class, btn_name }) {
  return (
    <div>
      <Header h1_class={h1_class} text={text} />
      <Paragraph para_class={para_class} para={para} />
      <Button btn_class={btn_class} btn_name={btn_name} />
    </div>
  );
}

export default HPB;
