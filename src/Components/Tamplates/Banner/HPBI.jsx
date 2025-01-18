import React from "react";
import { motion } from "framer-motion";
import HP from "../../Molecules/HP";
import Bannerimg from "../../Atoms/Bannerimg";

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
  const bounceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 165 },
    },
  };

  return (
    <div className={hpi_class}>
      <motion.div
        className={hp_class}
        variants={bounceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <HP
          h1_class={h1_class}
          text={text}
          para_class={para_class}
          para={para}
        />
      </motion.div>
      <Bannerimg img_class={img_class} src={src} alt={alt} />
    </div>
  );
}

export default Hpi;
