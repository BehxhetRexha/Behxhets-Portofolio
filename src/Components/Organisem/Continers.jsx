import React from "react";
import Header from "../Atoms/Header";
import HP from "../Molecules/HP";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";

function Continers({
  con_class,
  hp_class,
  h1_class,
  text1,
  text,
  para_class,
  para,
  img_class,
  src,
  alt,
  btn_class,
  btn_name,
  onClick,
}) {
  return (
    <div className={con_class}>
      <Image img_class={img_class} src={src} alt={alt} />
      <Header h1_class="job-h1" text={text1} />
      <HP
        hp_class={hp_class}
        h1_class={h1_class}
        text={text}
        para_class={para_class}
        para={para}
      />
      <Button onClick={onClick} btn_class={btn_class} btn_name={btn_name} />
    </div>
  );
}

export default Continers;
