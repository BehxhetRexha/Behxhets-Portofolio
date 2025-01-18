import React from "react";
import HPB from "../Molecules/HPB";
import Image from "../Atoms/Image";

function HPBI({ h1_class, text, para_class, para, btn_class, btn_name }) {
  return (
    <div className="HPBI">
      <HPB
        h1_class={h1_class}
        text={text}
        para_class={para_class}
        para={para}
        btn_class={btn_class}
        btn_name={btn_name}
      />
      <Image img_class={img_class} src={src} alt={alt} />
    </div>
  );
}

export default HPBI;
