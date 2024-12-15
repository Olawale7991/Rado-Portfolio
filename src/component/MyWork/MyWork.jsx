import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';


const MyWork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); 

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); 
  };

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((item, index) => {
          const isExpanded = expandedIndex === index; 
          return (
            <div key={index} className="card">
              <img src={item.w_img} alt={item.w_name} />
              <p className="title">{item.w_name}</p>
              <p className="description">
                {isExpanded ? item.w_desc : `${item.w_desc.slice(0, 200)}...`}
                <span
                  className="more-toggle"
                  onClick={() => toggleDescription(index)}
                >
                  {isExpanded ? ' Show Less' : ' More →'}
                </span>
              </p>
              <div className="btn-group">
                <a href={item.w_gt} target="_blank" rel="noopener noreferrer"><button> Github</button></a>
                <a href={item.w_url} target="_blank" rel="noopener noreferrer"><button> Website</button></a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
