import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

function Bannerimg({ img_class, src, alt }) {
  return (
    <motion.div
      className={`image-banner ${img_class}`}
      style={{
        perspective: "1000px", // Add depth for 3D effect
        display: "inline-block", // Maintain layout
      }}
      whileHover={{
        rotateX: 10,
        rotateY: -10,
        scale: 1.1, // Add scale effect
      }}
      transition={{ duration: 0.5 }} // Correct placement of transition
    >
      <img className={img_class} src={src} alt={alt}></img>
    </motion.div>
  );
}

export default Bannerimg;
