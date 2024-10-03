import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About me</h3>
          <p>
            This is my personal website where you can learn a little more about
            me.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconTwitter}></a>
            <a href="#" className={styles.iconFacebook}></a>
            <a href="#" className={styles.iconInstagram}></a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Financial Advisory</li>
            <li>Data Analysis</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Have questions?</h3>
          <ul>
            <li>
              <i className={styles.iconLocation}></i> Lima, Perú
            </li>
            <li>
              <i className={styles.iconPhone}></i> +51 991139451
            </li>
            <li>
              <i className={styles.iconEmail}></i> jvegar@uni.pe
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2024 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
