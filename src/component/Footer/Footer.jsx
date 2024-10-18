import React from 'react'
import './Footer.css'
import underline from '../../assets/nav_underline.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
        <div className='olas'>
            <h3>Olawale </h3>
            <img src={underline} alt="" />
        </div>
                <p>I am a full-stack developer specializing in the MERN stack. My goal is to leverage my skills to help businesses grow through innovative web development </p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'> &copy; 2024 Olawale Ridwan, All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
       
    </div>
  )
}

export default Footer