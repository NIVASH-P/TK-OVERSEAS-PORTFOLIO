/**
 * @author Parthiban
 * @description contant us page for tk-overeas
 * 
 * 
 */
import React from 'react'
import './Contact.css';
import img from "./img.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Contact = () => {
  return (
    <section className='contact' id='contact'>

        <div className='contact-main'>
        <div className="head-name">
                  <h1>Let’s Discuss</h1>
                  <p>Always available for Carreer Conselling if the right project comes along,<br /> Feel free to contact me.</p>
            </div>
            <div className="row">
               <div className="col1">
                   <img className='contact-img' src='/images/blured2.png' alt="" />
                   <p>Write an e-mail</p>
                   <h3>rameshnri88@gmail.com</h3>
                   <p>write a message</p>
                   <h3>+91 9884860808 (Office)</h3>
                   <h3>+91 9597927768 (Personal)</h3>
                   <div className="social">
                   <a target="_blank" href="https://x.com/rameshraju17014">
                    <XIcon fontSize='medium' className='icon'/>
                  </a>
                   <a target="_blank" href="https://www.instagram.com/tkoverseas">
                    <InstagramIcon className='icon'/>
                  </a>
                   <a target="_blank" href="https://www.linkedin.com/in/ramesh-raju-428114172">
                    <LinkedInIcon className='icon'/>
                  </a>
                    
                      
                   </div>
               </div>
               <div className="col2">
                  
                  <div className="form">
                      <div className="flex">
                      <div>
                        <label htmlFor="name">YOUR NAME</label> 
                        <input type="text" placeholder='Name*' id="name" required/>
                      </div>
                      <div>
                      <label htmlFor="name">YOUR EMAIL</label>
                      <input type="email" placeholder='Email*' id="name"  required/>
                      </div>
                      </div>
                      <label htmlFor="name">SUBJECT</label>
                      <input type="text" placeholder='Subject*' required/>
                      <label htmlFor="name">YOUR MESSAGE</label>
                      <textarea name="message" id="" placeholder='Your Message*' > </textarea>

                      <button>SEND MESSAGE</button>
                  </div>
               </div>
            </div>
        </div>

    </section>
  )
}

export default Contact
