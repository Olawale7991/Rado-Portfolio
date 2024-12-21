import React, { useEffect } from "react";
import "./Hero.css";
import copy from "../../assets/copy.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import cv from "../../assets/mern.pdf";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      ref={ref}
      id="home"
      className="hero"
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <motion.img src={copy} alt="" variants={scaleUp} />
      <motion.h1 variants={fadeIn}>
        <span className="name">I'm Olawale Ridwanullahi,</span> Full-Stack Developer
        based in Lagos, Nigeria.
      </motion.h1>
      <motion.p variants={fadeIn}>
        I'm a MERN-Stack Developer from Lagos, Nigeria.
      </motion.p>
      <motion.div className="hero-action" variants={fadeIn}>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>
        <a className="hero-resume" href={cv} target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
