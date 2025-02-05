import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Chief Executive Officer",
    company: "TK OVERSEAS EDUCATION CONSULTANCY ",
    technologies: [
      "REST API",
      "RxJS",
      "JavaScript",
      "Bootstrap",
      "MDBootstrap",
      "EF Core",
      ".NET Core",
      "SignalR",
      "Angular Material",
    ],
    duration: "Jan 2018 - Present",
    version: "Angular 8/9/10",
  },
  {
    title: "On-Site-Supervision",
    company: "TK OVERSEAS EDUCATION CONSULTANCY",
    technologies: ["RxJS", "Django", "PHP", "JavaScript", "DHTMLX Gantt"],
    duration: "Jul 2016 - Dec 2017",
    version: "Angular 7/8",
  },
  {
    title: "Electrical Engineering",
    company: "Saudi Arabia",
    technologies: ["RxJS", "Django", "PHP", "JavaScript", "DHTMLX Gantt"],
    duration: "Jul 2014 - Jun 2016",
    version: "Angular 7/8",
  },
  {
    title: "Lecturer",
    company: "PGP Polytechnic College",
    technologies: ["RxJS", "Django", "PHP", "JavaScript", "DHTMLX Gantt"],
    duration: "Jul 2010 - Apr 2014",
    version: "Angular 7/8",
  },
];

const Experience = () => {
  return (
    <section className="ex">
      <div className="timeline-container">
        <h2 className="title">Experience</h2>
        <div className="timeline">
          {experiences.map(
            ({ title, company, technologies, duration, version }, index) => (
              <div
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={index}
              >
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>{title}</h3>
                  <h4>{company}</h4>
                  {/* <div className="technologies">
                  {technologies.map((tech, i) => (
                    <span key={i} className="tech">
                      {tech}
                    </span>
                  ))}
                </div> */}
                  <p className="duration">{duration}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
