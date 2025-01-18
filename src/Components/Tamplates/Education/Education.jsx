import React from "react";
import { motion } from "framer-motion";
import HH from "../../Molecules/HH";
import Continers from "../../Organisem/Continers";
import "./education.css";

function Education() {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 }, // Start off-screen above
    visible: { opacity: 1, y: 0 }, // Fade in and slide into position
  };

  return (
    <motion.div
      id="Education"
      className="Education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={containerVariants}
    >
      <HH h1_class="education-Header" text="Education" />
      <div className="Continers-education">
        <Continers
          con_class="edukat"
          text1="University AAB"
          h1_class="about-text1"
          text="Bachelor of Science in Computer Science(Programming)"
          para="Universiteti AAB is one of the most prestigious private universities in Kosovo, renowned for its commitment to academic excellence and innovation. As a student at AAB, I have the opportunity to engage in a dynamic learning environment with modern facilities, experienced professors, and a curriculum designed to meet the demands of today's competitive job market. The university emphasizes practical skills alongside theoretical knowledge, enabling students to be well-prepared for professional challenges. With its focus on fostering creativity, critical thinking, and collaboration, AAB has become a hub for aspiring professionals across various fields. Being a part of the AAB community has been an enriching experience that continues to shape my academic and professional growth."
        />
        <Continers
          con_class="edukat"
          text1="Middle School Lutfi Musiqi"
          h1_class="about-text1"
          text="Informatics and Technology (IT)"
          para="During my middle school years, I attended Lutfi Musiqi, an institution known for its emphasis on IT and technology education. This experience laid the foundation for my passion for programming and technology. At Lutfi Musiqi, I gained early exposure to IT concepts, problem-solving techniques, and software tools that sparked my interest in pursuing a career in tech. The skills and knowledge I acquired during this time continue to support my academic and professional journey."
        />
        <Continers
          con_class="edukat"
          text1="Innovation Academy"
          h1_class="about-text1"
          text="Front-End Developer"
          para="I completed a 4-year course at Innovation Academy, where I gained expertise in front-end development. During the course, I mastered HTML, CSS, JavaScript, WordPress, and React.js, qualifying in all of them. My training focused on building responsive, dynamic, and user-friendly web applications, giving me a solid foundation in web technologies and modern frameworks. With this experience, I am confident in my ability to create engaging and efficient front-end solutions."
        />
        <Continers
          con_class="edukat"
          text1="Udemy"
          h1_class="about-text1"
          text="JavaScript & React.js"
          para="I recently re-qualified in JavaScript and React.js through an online course on Udemy. This allowed me to refine my skills further and stay updated with the latest practices and trends in front-end development. Combined with my earlier 4-year training at Innovation Academy, I bring both foundational expertise and up-to-date knowledge to my work as a front-end developer."
        />
        <Continers
          con_class="edukat"
          text1="The Cambridge School"
          h1_class="about-text1"
          text="English Course"
          para="I spent six years at The Cambridge School, where I received comprehensive English language training. Throughout the course, I focused on enhancing my speaking, writing, reading, and listening skills, which have significantly contributed to my fluency in English. This extended training allowed me to become proficient in both formal and informal communication, which is essential for collaborating with teams, engaging with clients, and delivering clear technical documentation. My strong command of English complements my technical skills, enabling me to effectively communicate in professional and international environments."
        />
      </div>
    </motion.div>
  );
}

export default Education;
