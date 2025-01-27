/**
 * @author Nithish_kumar_P
 * @description These page has a content oƒ about us page
 * @returns {JSX.ELEMENT} These page returns about us component
 */

import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="image">
        <img src="../../../public/about-banner.png" alt="" />
      </div>
      <div className="aboutus-content">
        <h2>ABOUT US</h2>
        <h1 className="font-style">I AM AVAILABLE FOR UI UX DESIGN PROJECTS</h1>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quia
          voluptatum hic deserunt, aliquid porro ab aliquam deleniti consectetur
          reiciendis odio minus repellat nihil dolorem facilis ipsa beatae
          magnam eius.
        </h3>
      </div>
    </div>
  );
};

export default AboutUs;
