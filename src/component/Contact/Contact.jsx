import React, { useRef } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzygjdw");
  if (state.succeeded) {
    return alert("Thanks for joining");
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      id="contact"
      className="contact"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Title Section */}
      <motion.div className="contact-title" variants={fadeIn}>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>

      {/* Contact Section */}
      <motion.div className="contact-section" variants={fadeIn}>
        {/* Left Section */}
        <motion.div className="contact-left" variants={fadeIn}>
          <h1>Let's connect</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>

          {/* Contact Details */}
          <div className="contact-details">
            {[
              {
                icon: mail_icon,
                text: "olawaleridwan7991@gmail.com",
              },
              {
                icon: location_icon,
                text: "Lagos, Nigeria",
              },
              {
                icon: call_icon,
                text: "+234-70-6762-1077",
              },
            ].map((item, index) => (
              <motion.div
                className="contact-detail"
                key={index}
                variants={fadeIn}
              >
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact-right"
          variants={fadeIn}
        >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />

          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your e-mail"
            id="email"
            name="e-mail"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="">Write out your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            className="contact-submit"
            disabled={state.submitting}
          >
            Submit Now
          </button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
