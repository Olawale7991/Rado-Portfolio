import React from 'react'
import './Hero.css'
import copy from '../../assets/copy.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cv from '../../assets/mern.pdf'




const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={copy} alt="" />
    <h1> <span className='name'>I'm Olawale Ridwanullahi,</span> Full-Stack Developer based in Lagos, Nigeria.</h1>
    <p>I'm MERN-Stack Developer from Lagos, Nigeria.</p>
    <div className='hero-action'>
       <AnchorLink className='anchor-link' offset={50} href='#contact'> <div className='hero-connect'>Connect With Me</div></AnchorLink>
       <a className="hero-resume" href={cv} target="_blank" rel="noopener noreferrer">
  My Resume
</a>

    </div>
    </div>
  )
}

export default Hero