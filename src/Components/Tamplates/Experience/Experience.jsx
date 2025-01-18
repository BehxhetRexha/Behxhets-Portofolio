import React from "react";
import { motion } from "framer-motion";
import HH from "../../Molecules/HH";
import Jobs from "../../Organisem/Continers";
import "./experience.css";

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      id="Experience"
      className="Experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={containerVariants}
    >
      <HH text="Experience" />
      <div className="jobs">
        <Jobs
          con_class="Jobs"
          text1="Front-End Web Developer"
          h1_class="about-text1"
          text="elmamulliqicouture"
          para="I’ve developed a website for a dresses store, and it’s one of my proudest projects! The goal was to create an elegant and functional platform that provides an excellent user experience for customers looking to shop for dresses online."
        />
        <Jobs
          con_class="Jobs"
          text1="Qualified Front-end Developer   "
          h1_class="about-text1"
          text="Innovation Academy"
          para="During my time at Innovation Academy, I successfully completed a comprehensive front-end development module. The course emphasized modern web technologies, user-centric design, and responsive application development. Through this program, I gained hands-on experience with HTML, CSS, and JavaScript, alongside frameworks like React."
        />
        <Jobs
          con_class="Jobs"
          text1="Qualified Front-end Developer "
          h1_class="about-text1"
          text="Udemy"
          para="Recently, I completed a comprehensive course in JavaScript and React on Udemy.com, which was an incredible learning experience. The program covered everything from JavaScript fundamentals to advanced topics like asynchronous programming and modern ES6+ features.

On the React side, I delved into building dynamic, component-based applications, state management with hooks, and working with APIs to create seamless user experiences. One of the highlights was developing a fully functional project that showcased my skills in React, demonstrating my ability to implement real-world solutions with reusable and maintainable code."
        />
      </div>
    </motion.div>
  );
}

export default Experience;
