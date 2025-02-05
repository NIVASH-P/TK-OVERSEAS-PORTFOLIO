/**
 * @author Parthiban
 * @description Contact us page for TK Overseas
 */

import React, { useRef } from "react";
import "./Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(); // Create a reference for the form

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xzm4c0t", // Service ID
        "template_n68y8od", // Template ID
        form.current, // Form reference
        "O_YAXnpFkSWJsIupD" // Public Key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-main">
        <div className="head-name">
          <h1>Let’s Discuss</h1>
          <p>
            Always available for career counseling if the right project comes
            along,
            <br /> Feel free to contact me.
          </p>
        </div>
        <div className="row">
          <div className="col1">
            <img className="contact-img" src="/images/blured2.png" alt="" />
            <p>Write an e-mail</p>
            <h3>rameshnri88@gmail.com</h3>
            <p>Write a message</p>
            <h3>+91 9884860808 (Office)</h3>
            <h3>+91 9597927768 (Personal)</h3>
            <div className="social">
              <a target="_blank" href="https://x.com/rameshraju17014">
                <XIcon fontSize="medium" className="icon" />
              </a>
              <a target="_blank" href="https://www.instagram.com/tkoverseas">
                <InstagramIcon className="icon" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ramesh-raju-428114172"
              >
                <LinkedInIcon className="icon" />
              </a>
            </div>
          </div>
          <div className="col2">
            <div className="form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex">
                  <div>
                    <label htmlFor="name">YOUR NAME</label>
                    <input
                      type="text"
                      placeholder="Name*"
                      id="name"
                      name="from_name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">YOUR EMAIL</label>
                    <input
                      type="email"
                      placeholder="Email*"
                      id="email"
                      name="from_email"
                      required
                    />
                  </div>
                </div>
                <label htmlFor="subject">SUBJECT</label>
                <input type="text" name="subject" placeholder="Subject*" required />
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea name="message" placeholder="Your Message*" required />
                <button type="submit">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
