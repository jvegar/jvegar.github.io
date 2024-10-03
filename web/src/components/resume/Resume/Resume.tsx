import React, { useState } from "react";
import "./Resume.css";

function Resume() {
  const [selectedItem, setSelectedItem] = useState("Education");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);

    // Add smooth scrolling effect
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
          {/* Skills content */}
        </div>
        <div
          id="page-acknowledgements"
          className="resume__page resume__page--acknowledgements"
        >
          <h2 className="resume__heading">Acknowledgements</h2>
          {/* Acknowledgements content */}
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
                {["Education", "Experience", "Skills", "Acknowledgements"].map(
                  (item) => (
                    <li key={item} className="resume__nav-item">
                      <a
                        href={`#${item.toLowerCase()}`}
                        className={`resume__nav-link ${
                          selectedItem === item
                            ? "resume__nav-link--active"
                            : ""
                        }`}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="resume__nav-text">{item}</span>
                      </a>
                    </li>
                  )
                )}
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
