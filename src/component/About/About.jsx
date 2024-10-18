import React from 'react'
import './About.css'
import photoshoot2 from '../../assets/photoshoot5.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className='about-section'>
            
            <div className='about-right'>
                <marquee className='about-para' behavior="" direction="left" >
                <p>I am a passionate web developer specializing in the MERN stack. With hands-on experience building e-commerce platforms and solving complex backend challenges and , I focus on creating user-friendly, scalable solutions</p>
                <p> I thrive in dynamic environments and am always eager to learn new technologies and contribute to impactful projects. My goal is to leverage my skills to help businesses grow through innovative web development</p>
                </marquee>
                
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width: '75%'}}/></div>
                    <div className='about-skill'><p>React JS</p><hr style={{width: '60%'}}/></div>
                    <div className='about-skill'><p>Javascript</p><hr style={{width: '50%'}}/></div>
                    <div className='about-skill'><p>MongoDB</p><hr style={{width: '60%'}}/></div>
                    <div className='about-skill'><p>Nodes & Express</p><hr style={{width: '60%'}}/></div>
                    <div className='about-skill'><p>Postman API</p><hr style={{width: '70%'}}/></div>
                    <div className='about-skill'><p>Git & Github</p><hr style={{width: '75%'}}/></div>
                </div>
            </div>
            <div className='about-left'>
                <img src={photoshoot2} alt="" />
            </div>
        </div>
        <div className="about-achievements">
            <div className='about-achievement'>
                <h1>0-1</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className='about-achievement'>
                <h1>5+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About