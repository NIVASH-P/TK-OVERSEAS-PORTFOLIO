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

const Contact = () => {
  return (
    <section className='contact'>

        <div className='contact-main'>
        <div className="head-name">
                  <h1>Let’s Discuss Your Project</h1>
                  <p>Always available for freelancing if the right project comes along,<br /> Feel free to contact me.</p>
            </div>
            <div className="row">
               <div className="col1">
                   <img src={img} alt="" />
                   <p>Write an e-mail</p>
                   <h3>sample@domain.com</h3>
                   <p>write a message</p>
                   <h3>+044 9696 9696 3636</h3>
                   <div className="social">

                    <FacebookIcon className='icon'/>
                    <InstagramIcon className='icon'/>
                    
                    <LinkedInIcon className='icon'/>
                      
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
