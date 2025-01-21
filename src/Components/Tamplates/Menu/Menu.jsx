import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../Atoms/Header";
import Button from "../../Atoms/Button";
import "./menu.css";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) observer.unobserve(menuRef.current);
    };
  }, []);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      ref={menuRef}
      className={`Menu ${isMenuOpen ? "mobile-open" : ""}`}
      initial={{ opacity: 0, y: -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{
          rotateX: 360,
          rotateY: -10,
          transition: { duration: 0.5 },
        }}
      >
        <Header h1_class="menu-Logo" text="Behxhet Rexha" />
      </motion.div>
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <div className={`menu-items ${isMenuOpen ? "show" : ""}`}>
        {[
          { id: "AboutMe", name: "About" },
          { id: "Experience", name: "Experience" },
          { id: "Education", name: "Education" },
          { id: "Projects", name: "Projects" },
          { id: "Skills", name: "Skills" },
          { id: "Contact", name: "Contact" },
        ].map((item) => (
          <motion.div
            key={item.id}
            whileHover={{
              rotateX: 10,
              rotateY: -30,
              scale: 1.3,
              transition: { duration: 0.5 },
            }}
          >
            <Button
              onClick={() => handleScroll(item.id)}
              btn_class="menu_button"
              btn_name={item.name}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Menu;
