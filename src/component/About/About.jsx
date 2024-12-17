import React from "react";
import { motion } from "framer-motion"; 
import "./About.css";
import photoshoot2 from "../../assets/photoshoot5.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      id="about"
      className="about"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* About Title */}
      <motion.div className="about-title" variants={fadeIn}>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Pattern" />
      </motion.div>

      {/* About Section */}
      <div className="about-section">
        {/* Right Section */}
        <motion.div className="about-right" variants={fadeIn}>
          <div className="para">
            <motion.p variants={fadeIn}>
              I am a passionate web developer specializing in the MERN stack.
              With hands-on experience building e-commerce platforms and solving
              complex backend challenges, I focus on creating user-friendly,
              scalable solutions.
            </motion.p>
            <motion.p variants={fadeIn}>
              I thrive in dynamic environments and am always eager to learn new
              technologies and contribute to impactful projects. My goal is to
              leverage my skills to help businesses grow through innovative web
              development.
            </motion.p>
          </div>

          {/* Skills Section */}
          <motion.div className="about-skills" variants={fadeIn}>
            {[
              { skill: "HTML & CSS", width: "75%" },
              { skill: "React JS", width: "60%" },
              { skill: "Javascript", width: "50%" },
              { skill: "MongoDB", width: "60%" },
              { skill: "Nodes & Express", width: "60%" },
              { skill: "Postman API", width: "70%" },
              { skill: "Git & Github", width: "75%" },
            ].map((item, index) => (
              <motion.div className="about-skill" key={index} variants={fadeIn}>
                <p>{item.skill}</p>
                <hr style={{ width: item.width }} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Left Section */}
        <motion.div
          className="about-left"
          variants={scaleIn}
          transition={{ duration: 0.5 }}
        >
          <img src={photoshoot2} alt="Profile" />
        </motion.div>
      </div>

      {/* Achievements Section */}
      <motion.div className="about-achievements" variants={staggerContainer}>
        {[
          { value: "1-2", label: "YEARS OF EXPERIENCE" },
          { value: "5+", label: "PROJECT COMPLETED" },
        ].map((item, index) => (
          <motion.div
            className="about-achievement"
            key={index}
            variants={fadeIn}
          >
            <h1>{item.value}</h1>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
