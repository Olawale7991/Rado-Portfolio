    import React from 'react';
    import './Footer.css';
    import underline from '../../assets/nav_underline.svg';
    import user_icon from '../../assets/user_icon.svg';
    import { motion } from 'framer-motion';

    const Footer = () => {
    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
        },
    };

    return (
        <motion.div
        className="footer"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        >
        <div className="footer-top">
            {/* Left Section */}
            <div className="footer-top-left">
            <div className="olas">
                <h3>Olawale</h3>
                <img src={underline} alt="Underline" />
            </div>
            <p>
                I am a full-stack developer specializing in the MERN stack. My goal is to leverage my skills to help businesses grow through innovative web development.
            </p>
            </div>

            {/* Right Section */}
            <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="User Icon" />
                <motion.input
                type="email"
                placeholder="Enter your email"
                whileFocus={{ scale: 1.05, borderColor: '#007bff' }}
                />
            </div>
            <motion.div
                className="footer-subscribe"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Subscribe
            </motion.div>
            </div>
        </div>

        <hr />

        <div className="footer-bottom">
            <p className="footer-bottom-left">
            &copy; 2024 Olawale Ridwan, All rights reserved.
            </p>
            <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <motion.p
                whileHover={{ textDecoration: 'underline', color: '#007bff' }}
            >
                Connect with me
            </motion.p>
            </div>
        </div>
        </motion.div>
    );
    };

    export default Footer;
