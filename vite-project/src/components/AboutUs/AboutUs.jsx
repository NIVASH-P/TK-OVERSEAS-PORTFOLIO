/**
 * @author Nithish_kumar_P
 * @description These page has a content oƒ about me page
 * @returns {JSX.ELEMENT} These page returns about me component
 */

// import Experience from "../Experience/Experience";
import "./AboutUs.css";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

const AboutUs = () => {
  return (
    <section className="aboutus" id="about">
      <div className="aboutus-container aboutus-scoped">
        <div className="image-card slide-in">
          <div className="image">
            <img src="/images/blured2.png" alt="aboutUs-image" />
          </div>
        </div>
        <div className="aboutus-content">
          <h1 className="aboutus-description">
            I AM FOUNDER OF <span className="aboutus-job">TK OVERSEAS</span>{" "}
          </h1>
          <div className="aboutus-details">
            FOUNDER & CEO OF TK OVERSEAS EDUCATION CONSULTANCY | CAREER
            CONSULTANT FOR ABROAD STUDIES | EDUCATION LOAN | STUDY & WORK VISA
            ASSISTANCE SERVICE | MEMBER OF JCI | CAREER COUNSELLING CERTIFIED
            CAREER COUNSELLOR FOR INTERNATIONAL STUDIES
          </div>
          <div className="card-container">
            <div className="card">
              <h3>
                <span className="card-number">270+</span>{" "}
                <span className="card-text">Student Visa</span>
              </h3>
            </div>
            <div className="card">
              <h3>
                <span className="card-number">6+</span>{" "}
                <span className="card-text">Years Experience</span>
              </h3>
            </div>
            <div className="card">
              <h3>
                <span className="card-number">40+</span>{" "}
                <span className="card-text">Tourist Visa</span>
              </h3>
            </div>
          </div>
          <button className="aboutus-button">
            GET IN TOUCH <ArrowRightAltSharpIcon />{" "}
          </button>
        </div>
        <div className="aboutus-roller">
          <img src="/effect-2.svg" width={300} />
        </div>
      </div>
      {/* <Experience /> */}
    </section>
  );
};

export default AboutUs;
