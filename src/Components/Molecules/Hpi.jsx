import React from "react";

import Image from "../Atoms/Image";
import HP from "./HP";

function Hpi({
  hp_class,
  img_class,
  src,
  alt,
  h1_class,
  text,
  para_class,
  para,
  hpi_class,
}) {
  return (
    <div className={hpi_class}>
      <HP
        hp_class={hp_class}
        h1_class={h1_class}
        text={text}
        para_class={para_class}
        para={para}
      />

      <Image img_class={img_class} src={src} alt={alt} />
    </div>
  );
}

export default Hpi;
