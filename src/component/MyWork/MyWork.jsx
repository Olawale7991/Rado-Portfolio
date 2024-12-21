import React, { useEffect, useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MyWork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const descriptionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.8 } },
  };

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={ref} // Attach ref to detect visibility
      id="work"
      className="mywork"
      initial="hidden"
      animate={controls} // Trigger animation dynamically
      variants={containerVariants}
    >
      {/* Title Section */}
      <motion.div className="mywork-title" variants={cardVariants}>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </motion.div>

      {/* Work Cards */}
      <motion.div className="mywork-container" variants={containerVariants}>
        {mywork_data.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className="card"
              variants={cardVariants}
            >
              <img src={item.w_img} alt={item.w_name} />
              <p className="title">{item.w_name}</p>
              <div className="description">
                <p>
                  {isExpanded ? item.w_desc : `${item.w_desc.slice(0, 200)}...`}
                  <span
                    className="more-toggle"
                    onClick={() => toggleDescription(index)}
                  >
                    {isExpanded ? " Show Less" : " More →"}
                  </span>
                </p>

                {isExpanded && (
                  <motion.div
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <p>{item.w_desc.slice(200)}</p>
                  </motion.div>
                )}
              </div>

              <div className="btn-group">
                <a href={item.w_gt} target="_blank" rel="noopener noreferrer">
                  <button>Github</button>
                </a>
                <a href={item.w_url} target="_blank" rel="noopener noreferrer">
                  <button>Website</button>
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Show More Section */}
      <motion.div className="mywork-showmore" variants={cardVariants}>
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </motion.div>
    </motion.div>
  );
};

export default MyWork;
