import React from "react";
import HH from "../Molecules/HH";
import Paragraph from "../Atoms/Paragraph";

function AboutMe() {
  return (
    <div id="AboutMe" className="about-me">
      <HH text="About Me" />
      <Paragraph
        para_class="about-para"
        para="Hi, I'm Behxhet Rexha, a passionate and dedicated tech enthusiast with a strong foundation in programming and IT. I have been immersed in the world of technology for many years, starting in middle school where I attended an IT-focused school. After completing a comprehensive four-year programming course, I gained hands-on experience in coding, problem-solving, and software development. Currently, I am a student at Universiteti AAB, where I continue to deepen my knowledge and skills in IT and programming. With a blend of academic learning and practical experience, I’m eager to build innovative projects, solve complex problems, and contribute to the ever-evolving tech landscape."
      />
    </div>
  );
}

export default AboutMe;
