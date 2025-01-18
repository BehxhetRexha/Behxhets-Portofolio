import React from "react";
import { motion } from "framer-motion";
import HH from "../../Molecules/HH";
import Continers from "../../Organisem/Continers";
import Elma from "../../../assets/project2.png";
import Eco from "../../../assets/project1.png";
import game from "../../../assets/game1.png";
import game2 from "../../../assets/game2.png";
import "./projects.css";

function Projects() {
  const handleClick = (url) => {
    window.location.href = url;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 }, // Start off-screen above
    visible: { opacity: 1, y: 0 }, // Fade in and slide into position
  };

  return (
    <motion.div
      id="Projects"
      className="Projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is visible
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={containerVariants}
    >
      <HH text="Projects" />
      <div className="projektet-kontinier">
        <Continers
          img_class="project-img"
          src={Elma}
          alt="elma"
          con_class="projektet"
          text1="Dresses Ecommerce"
          h1_class="about-text1"
          para="I developed a fully functional e-commerce website specializing in selling stylish and trendy dresses. The platform is designed with a focus on user experience, making it easy for customers to browse, select, and purchase their favorite items. Key features of the website include: Responsive Design: Ensures a seamless shopping experience across all devices. Secure Payment Integration: Provides safe and hassle-free transactions. User-Friendly Interface: Simplifies navigation for shoppers. Dynamic Product Listings: Showcases a variety of dress styles and categories. Creating this website allowed me to explore the intricacies of web development, including front-end design, back-end functionality, and database management. It reflects my passion for combining creativity and technology to solve real-world problems."
          btn_class="project-btn"
          btn_name="View Project"
          onClick={() => handleClick("https://ecommercedresses.netlify.app/")}
        />
        <Continers
          img_class="project-img"
          src={Eco}
          alt="e-commerce"
          con_class="projektet"
          text1="E-Commerce Website"
          h1_class="about-text1"
          para="I created a versatile e-commerce platform that offers a wide range of products, including clothing for all occasions, televisions, and other electronics. The website is designed to provide a seamless shopping experience for users, combining functionality with an intuitive design. Key Features: Comprehensive Product Categories: Users can easily browse through clothing, electronics, and miscellaneous items, each organized into intuitive categories. Responsive Design: Ensures an optimal shopping experience on desktops, tablets, and mobile devices. Advanced Search and Filters: Helps users quickly find exactly what they’re looking for. Secure Checkout: Integrated with multiple payment gateways for secure and convenient transactions. Dynamic and Scalable: Built to handle large inventories and future expansions. This project allowed me to showcase my ability to design and develop scalable e-commerce solutions."
          btn_class="project-btn"
          btn_name="View Project"
          onClick={() => handleClick("https://ecommercesiteee.netlify.app/")}
        />
        <Continers
          img_class="project-img"
          src={game}
          alt="PigGame"
          con_class="projektet"
          text1="TwoPlayer(PigGame)"
          h1_class="about-text1"
          para='I developed the Pig Game using HTML, CSS, and JavaScript, making it a simple yet engaging browser game for two players. The interface includes sections to display player scores, a dice graphic that updates dynamically, and buttons for rolling the dice, holding the score, and starting a new game. The gameplay logic was implemented in JavaScript. When a player clicks the "Roll Dice" button, a random dice number is generated. If it’s anything other than a 1, the value is added to their current turn score. Rolling a 1, however, ends their turn, and they lose any points accumulated for that round. Players can also click the "Hold" button to save their current turn score to their total, passing the dice to the other player.'
          btn_class="project-btn"
          onClick={() => handleClick("https://twoplayergamee.netlify.app/")}
        />
        <Continers
          img_class="project-img"
          src={game2}
          alt="elma"
          con_class="projektet"
          text1="Guess My Number!"
          h1_class="about-text1"
          para="I created the Guess My Number! game as a fun and interactive project to test a player's intuition and logic. The game is simple but keeps players hooked with its challenge to guess a secret number between 1 and 20. When the game starts, it generates a random number that stays hidden. Players enter their guesses in an input field and click a button to submit their answers. I added feedback mechanisms so the game tells players if their guess is too high, too low, or spot on. To make things more engaging, I displayed their score, which starts at 20 and decreases by one for every incorrect guess. If they guess the correct number, a celebratory message pops up, the background color changes, and the secret number is revealed. There’s also a 'Play Again' button, allowing them to restart the game without refreshing the page."
          btn_class="project-btn"
          btn_name="View Project"
          onClick={() => handleClick("https://guessthenumbergg.netlify.app/")}
        />
      </div>
    </motion.div>
  );
}

export default Projects;
