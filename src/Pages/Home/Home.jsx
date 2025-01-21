import React from "react";
import Menu from "../../Components/Tamplates/Menu/Menu";
import "./home.css";
import Banner from "../../Components/Tamplates/Banner/Banner";
import AboutMe from "../../Components/Tamplates/About/AboutMe";
import Experience from "../../Components/Tamplates/Experience/Experience";
import Education from "../../Components/Tamplates/Education/Education";
import Projects from "../../Components/Tamplates/Projects/Projects";
import Skills from "../../Components/Tamplates/Skills/Skills";
import ContactUs from "../../Components/Tamplates/ContactUs";
import Me from "../../assets/Me.jpeg";
import Prog from "../../assets/programmin.jpg";
function Home() {
  return (
    <div className="Home">
      <Menu />
      <Banner
        backgroundImage={Prog}
        hp_class="Banner-HP"
        hpi_class="Banner-hpi"
        h1_class="Banner-h1"
        text="Behxhet Rexha"
        para_class="para-banner"
        para="Front-End Web Developer"
        img_class="banner-img"
        src={Me}
        alt="Me"
      />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <ContactUs />
    </div>
  );
}

export default Home;
