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
  backgroundImage,
}) {
  const BannerDiv = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const bounceAnimation = keyframes`${bounce}`;

  const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
  `;
  return (
    <div className="Banner">
      <BannerDiv>
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
      </BannerDiv>
    </div>
  );
}

export default Banner;
