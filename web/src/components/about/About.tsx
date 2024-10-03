import "./About.css";
import aboutImage from "../../assets/about.jpg";
import Stack from "./Stack/Stack";
function About() {
  return (
    <section className="about" id="about-section">
      <div className="about__container">
        <div className="about__row">
          <div className="about__image-column">
            <div className="about__image-wrapper">
              <div className="about__image-overlay"></div>
              <img src={aboutImage} alt="About" className="about__image" />
            </div>
          </div>
          <div className="about__content-column">
            <div className="about__content-wrapper">
              <div className="about__heading">
                <h2 className="about__heading-medium">About me</h2>
                <p className="about__description">
                  IT professional with more than 10 years of experience in Web
                  Development, Cloud Infrastructure, Financial Advisory.
                </p>
                <ul className="about__info-list">
                  <li className="about__info-item">
                    <span className="about__info-label">Name:</span>
                    <span className="about__info-value">Jose Vega</span>
                  </li>
                  <li className="about__info-item">
                    <span className="about__info-label">Email:</span>
                    <span className="about__info-value">jvegar@uni.pe</span>
                  </li>
                  <li className="about__info-item">
                    <span className="about__info-label">Phone: </span>
                    <span className="about__info-value">+51-991139451</span>
                  </li>
                </ul>
              </div>
              <div className="about__counter">
                <div className="about__counter-text">
                  <p className="about__counter-projects">
                    <span className="about__counter-number" data-number="20">
                      20
                    </span>
                    <span className="about__counter-label">Projects</span>
                  </p>
                  <p className="about__counter-cta">
                    <a href="#" className="about__download-button">
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stack />
      </div>
    </section>
  );
}

export default About;
