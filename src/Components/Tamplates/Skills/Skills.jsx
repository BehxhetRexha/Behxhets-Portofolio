import React from "react";
import Block from "../../Molecules/Block";
import { motion } from "framer-motion";

import HH from "../../Molecules/HH";
import "./skills.css";
function Skills() {
  const containerVariants = {
    hidden: { opacity: 0, x: -550 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      id="Skills"
      className="Skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={containerVariants}
    >
      <HH text="Skills" />
      <div className="blocks">
        <Block text="HTML5" />
        <Block text="CSS" />
        <Block text="JavaScript" />
        <Block text="Python" />
        <Block text="Node.js" />
        <Block text="React" />
        <Block text="WordPress" />
      </div>
    </motion.div>
  );
}

export default Skills;
