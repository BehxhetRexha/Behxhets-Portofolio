import React from "react";

import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import "./banner.css";
import HPBI from "./HPBI";
function Banner({
  hp_class,
  img_class,
  src,
  alt,
  hpi_class,
  h1_class,
  text,
  para_class,
  para,
}) {
  const bounceAnimation = keyframes`${bounce}`;

  const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
  `;
  return (
    <div className="Banner">
      <BouncyDiv>
        <HPBI
          hp_class={hp_class}
          hpi_class={hpi_class}
          h1_class={h1_class}
          text={text}
          para_class={para_class}
          para={para}
          img_class={img_class}
          src={src}
          alt={alt}
        />
      </BouncyDiv>
    </div>
  );
}

export default Banner;
