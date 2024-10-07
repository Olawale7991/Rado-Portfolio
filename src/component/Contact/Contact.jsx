import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
 
    const [state, handleSubmit] = useForm("xyzygjdw");
    if (state.succeeded) {
        return alert('Thanks for joining');
        
    }
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's connect</h1>
                <p>i'm currently available to take on new projects, so feel free to send me message about anything that you want me to work on. You can contact me anytime</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                    <img src={mail_icon} alt="" />
                    <p>olawaleridwan7991@gmail.com</p>
                </div>
                <div className='contact-detail'>
                    <img src={location_icon} alt="" />
                    <p>Lagos, Nigeria</p>
                </div>
                <div className='contact-detail'>
                    <img src={call_icon} alt="" />
                    <p>+234-70-6762-1077</p>
                </div>
            </div>
            </div>
            <form onSubmit={handleSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your e-mail' id='email' name='e-mail'/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <label htmlFor="">Write out your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <ValidationError prefix="Message" field="message"errors={state.errors}/>
                <button type='submit' className='contact-submit' disabled={state.submitting}>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact