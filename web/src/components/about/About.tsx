import styles from "./About.module.css";
import aboutImage from "../../assets/about.jpg";
import Stack from "./Stack/Stack";
function About() {
  return (
    <section className={styles.about} id="about-section">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutRow}>
          <div className={styles.aboutImageColumn}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImageOverlay}></div>
              <img src={aboutImage} alt="About" className={styles.aboutImage} />
            </div>
          </div>
          <div className={styles.aboutContentColumn}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.aboutHeading}>
                <h2 className={styles.aboutHeadingMedium}>About me</h2>
                <p className={styles.aboutDescription}>
                  IT professional with more than 10 years of experience in Web
                  Development, Cloud Infrastructure, Financial Advisory.
                </p>
                <ul className={styles.aboutInfoList}>
                  <li className={styles.aboutInfoItem}>
                    <span className={styles.aboutInfoLabel}>Name:</span>
                    <span className={styles.aboutInfoValue}>Jose Vega</span>
                  </li>
                  <li className={styles.aboutInfoItem}>
                    <span className={styles.aboutInfoLabel}>Email:</span>
                    <span className={styles.aboutInfoValue}>jvegar@uni.pe</span>
                  </li>
                  <li className={styles.aboutInfoItem}>
                    <span className={styles.aboutInfoLabel}>Phone: </span>
                    <span className={styles.aboutInfoValue}>+51-991139451</span>
                  </li>
                </ul>
              </div>
              <div className={styles.aboutCounter}>
                <div className={styles.aboutCounterText}>
                  <p className={styles.aboutCounterProjects}>
                    <span
                      className={styles.aboutCounterNumber}
                      data-number="20"
                    >
                      20
                    </span>
                    <span className={styles.aboutCounterLabel}>Projects</span>
                  </p>
                  <p className={styles.aboutCounterCta}>
                    <a href="#" className={styles.aboutDownloadButton}>
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
