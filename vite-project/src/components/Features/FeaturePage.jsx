/**
 * @author NIVASH P 
 * @description This is the show the features of Ramesh Raju
 * @return {JSX.Element} return the features page Content
 */

import React from 'react'
import './FeaturePage.css'


const FeaturePage = () => {
  return (
    <section className='Feature-main'>
        <div className="features-top">
            <h1 className='header-award'>MY AWARDS</h1>
            <h1 className='header-Features'>RECENT FEATURES</h1>
        </div>
        <div className="features-bottom">
            <div className="card-details">
                <div className="card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHrcK1JtoIBN0dwdl3W6gwCxmElt1TJQHTQ&s" alt="" srcset="" />
                </div>
                <div className="card-content">
                    <h1 className='card-header'>Awards</h1>
                    <p className='card-details'>Awards received for the good Work</p>
                </div>
            </div>
        </div>
    </section>
  )
};

export default FeaturePage
