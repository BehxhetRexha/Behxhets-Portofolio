import React from "react";

function Image({ img_class, src, alt }) {
  return (
    <div className={`image-container ${img_class}`}>
      <img className={img_class} src={src} alt={alt}></img>
    </div>
  );
}

export default Image;
