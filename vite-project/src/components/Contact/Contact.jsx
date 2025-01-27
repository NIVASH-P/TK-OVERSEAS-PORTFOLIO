/**
 * @author Parthiban
 * @description contant us page for tk-overeas
 * 
 * 
 */
import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact'>

        <div className='contact-main'>
            <div className="row">
               <div className="col1">
                   <img src="" alt="" />
                   <p>Write an e-mail</p>
                   <h3>sample@domain.com</h3>
                   <p>write an e-mail</p>
                   <h3>+044 9696 9696 3636</h3>
               </div>
               <div className="col2">
                  <div className="head-name">
                  <h1>Let’s Discuss Your Project</h1>
                  <p>Always available for freelancing if the right project comes along,<br /> Feel free to contact me.</p>
                  </div>
                  <div className="form">
                      <label htmlFor="name">YOUR NAME</label>
                      <input type="text" placeholder='Name*' required/>
                      <label htmlFor="name">YOUR EMAIL</label>
                      <input type="email" placeholder='Email*' required/>
                      <label htmlFor="name">SUBJECT</label>
                      <input type="text" placeholder='Subject*' required/>
                      <label htmlFor="name">YOUR MESSAGE</label>
                      <textarea name="message" id="" placeholder='Your Message*'> </textarea>

                      <button>SEND MESSAGE</button>
                  </div>
               </div>
            </div>
        </div>

    </section>
  )
}

export default Contact
