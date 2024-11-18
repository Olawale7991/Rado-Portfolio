import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'



const MyWork = () => {
  return (
    <div className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
        {
                mywork_data.map((item, index) => (
                    // Wrap the image in an anchor tag
                    <a key={index} href={item.w_url} target="_blank" rel="noopener noreferrer">
                       <div>
                        <img src={item.w_img} alt={item.w_name} />
                       </div>
                    </a>
                ))
            }
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork