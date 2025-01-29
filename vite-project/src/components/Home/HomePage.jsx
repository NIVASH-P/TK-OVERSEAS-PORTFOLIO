import React, { useEffect } from 'react'
import './HomePage.css'
import TextTransition, { presets } from 'react-text-transition'

/**
 * @author Pavithran G
 * @description This is the home page component for the application.
 * @returns {JSX.Element} The HomePage component.
 */

const PROFILES = ['FOUNDER/CEO', 'EDU ADVISOR', 'CONSULTANT']
const HomePage = () => {
  const [index, setIndex] = React.useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000)
    return () => clearTimeout(intervalId)
  })

  return (
    <section className="home-page" id="home">
      <section className="home-left">
        {/* <section className='home-left-content'> */}
        <h1 className="name-in-box">Ramesh Raju</h1>
        <h1 className="hello-msg">HAY! I&apos;m Ramesh</h1>
        <h1 className="profession-display">
          I&apos;m&nbsp;
          <TextTransition springConfig={presets.wobbly}>
            {PROFILES[index % PROFILES.length]}
          </TextTransition>
        </h1>
        <p className="intro-para">
          I empower students with expert guidance on studying abroad, education
          loans, and visa assistance. With professional support, I simplify the
          path to global education and career success.
        </p>
        <section className="contact-bar">
          <button className="get-in-touch-btn">
            <a href='#contact'>
              Get In Touch <span> → </span>
            </a>
          </button>
          <section className="cnt-icon x">
            <a target="_blank" href="https://x.com/rameshraju17014">
              <img className="icon" src="/images/x.svg" />
            </a>
          </section>
          <section className="cnt-icon instagram">
            <a target="_blank" href="https://www.instagram.com/tkoverseas">
              <img className="icon" src="/images/instagram.svg" />
            </a>
          </section>
          <section className="cnt-icon linkedin">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ramesh-raju-428114172"
            >
              <img className="icon" src="/images/linkedin.svg" />
            </a>
          </section>
        </section>

        {/* </section> */}
      </section>
      <section className="home-right">
        <img className="main-img" src="/images/Designer.png" />
      </section>
    </section>
  )
}
export default HomePage
