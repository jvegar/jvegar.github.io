import React, { useState, useEffect } from "react";
import "./Resume.css";

function Resume() {
  const [activeSection, setActiveSection] = useState("Education");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Education", "Experience", "Skills"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(
          `page-${section.toLowerCase()}`
        );
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item: string) => {
    setActiveSection(item);

    const targetElement = document.getElementById(`page-${item.toLowerCase()}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const educationData = [
    {
      date: "2003-2009",
      title: "Bachelor in Systems Engineering",
      subtitle: "National University of Engineering",
    },
    {
      date: "2014-2016",
      title: "Master in Finance",
      subtitle: "Pacific Business School",
    },
    {
      date: "2010-2011",
      title: "Diploma in Project Management",
      subtitle: "Dharma Consulting",
    },
    {
      date: "2012-2013",
      title: "Investment Analysis",
      subtitle: "Bursen Bolsa de Valores de Lima",
    },
  ];

  const experienceData = [
    {
      date: "2021-Today",
      title: "Software Engineer",
      company: "BairesDev",
    },
    {
      date: "2020-2021",
      title: "Technical Lead",
      company: "NTT Data",
    },
    {
      date: "2017-2020",
      title: "Solutions Architect",
      company: "Certero",
    },
    {
      date: "2014-2016",
      title: "Software Developer",
      company: "Evol",
    },
    {
      date: "2011-2013",
      title: "Programmer",
      company: "CGI",
    },
    {
      date: "2011-2011",
      title: "System Analyst",
      company: "Pesquera Diamante",
    },
  ];

  const skillsData = [
    { name: "Node", percentage: 90, lastWeek: 28, lastMonth: 60 },
    { name: "TypeScript", percentage: 80, lastWeek: 28, lastMonth: 60 },
    { name: "Postgres", percentage: 75, lastWeek: 28, lastMonth: 60 },
  ];

  const additionalSkills = [
    { name: "React", percentage: 90 },
    { name: "Docker", percentage: 85 },
    { name: "GraphQL", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "Python", percentage: 70 },
    { name: "Java", percentage: 80 },
  ];

  const renderContent = () => {
    return (
      <>
        <div
          id="page-education"
          className="resume__page resume__page--education"
        >
          <h2 className="resume__heading">Education</h2>
          {educationData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="resume__item resume__item--education">
                <div className="resume__item-icon">
                  <span className="resume__icon resume__icon--ideas"></span>
                </div>
                <div className="resume__item-content">
                  <span className="resume__item-date">{item.date}</span>
                  <h2 className="resume__item-title">{item.title}</h2>
                  <span className="resume__item-subtitle">{item.subtitle}</span>
                </div>
              </div>
              {index < educationData.length - 1 && (
                <hr className="resume__separator" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div
          id="page-experience"
          className="resume__page resume__page--experience"
        >
          <h2 className="resume__heading">Experience</h2>
          {experienceData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="resume__item resume__item--experience">
                <div className="resume__item-icon">
                  <span className="resume__icon resume__icon--briefcase"></span>
                </div>
                <div className="resume__item-content">
                  <span className="resume__item-date">{item.date}</span>
                  <h2 className="resume__item-title">{item.title}</h2>
                  {item.company && (
                    <span className="resume__item-subtitle">
                      {item.company}
                    </span>
                  )}
                </div>
              </div>
              {index < experienceData.length - 1 && (
                <hr className="resume__separator" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div id="page-skills" className="resume__page resume__page--skills">
          <h2 className="resume__heading">Skills</h2>
          <div className="resume__skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="resume__skill-card">
                <h3>{skill.name}</h3>
                <div className="resume__skill-circle">
                  <svg viewBox="0 0 36 36" className="resume__skill-circle-svg">
                    <path
                      className="resume__skill-circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="resume__skill-circle-progress"
                      strokeDasharray={`${skill.percentage}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="resume__skill-percentage">
                      {skill.percentage}%
                    </text>
                  </svg>
                </div>
                <div className="resume__skill-stats">
                  <div className="resume__skill-stat">
                    <span className="resume__skill-stat-value">
                      {skill.lastWeek}%
                    </span>
                    <span className="resume__skill-stat-label">Last week</span>
                  </div>
                  <div className="resume__skill-stat">
                    <span className="resume__skill-stat-value">
                      {skill.lastMonth}%
                    </span>
                    <span className="resume__skill-stat-label">Last month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="resume__additional-skills">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="resume__skill-bar">
                <div className="resume__skill-bar-info">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="resume__skill-bar-bg">
                  <div
                    className="resume__skill-bar-progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="resume resume--section" id="resume-section">
      <div className="resume__container">
        <div className="resume__row">
          <div className="resume__nav-column">
            <nav className="resume__nav" id="navi">
              <ul className="resume__nav-list">
                {["Education", "Experience", "Skills"].map((item) => (
                  <li key={item} className="resume__nav-item">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`resume__nav-link ${
                        activeSection === item ? "resume__nav-link--active" : ""
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      <span className="resume__nav-text">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="resume__content-column">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
