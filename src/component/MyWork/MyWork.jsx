import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion, AnimatePresence } from "framer-motion"; 

const MyWork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const descriptionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div id="work" className="mywork">
      {/* Title Section */}
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      {/* Work Cards */}
      <motion.div
        className="mywork-container"
        initial="hidden"
        animate="visible"
      >
        {mywork_data.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
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

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      variants={descriptionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p>{item.w_desc.slice(200)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
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

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
