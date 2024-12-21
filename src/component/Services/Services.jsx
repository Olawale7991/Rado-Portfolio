import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div id="services" className="services" ref={ref}>
      {/* Title Section */}
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* Services Cards */}
      <motion.div
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {services_data.map((item, index) => (
          <motion.div
            key={index}
            className="services-format"
            variants={cardVariants}
          >
            <h3>{item.s_no}</h3>
            <h2>{item.s_name}</h2>
            <p>{item.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
