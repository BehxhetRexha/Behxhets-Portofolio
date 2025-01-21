import React from "react";
import Header from "../Atoms/Header";
import Image from "../Atoms/Image";

function HI({ hi, img_class, text1, src, alt }) {
  return (
    <div className={hi}>
      <Header h1_class="job-h1" text={text1} />
      <Image img_class={img_class} src={src} alt={alt} />
    </div>
  );
}

export default HI;
