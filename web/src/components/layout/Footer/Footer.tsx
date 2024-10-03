import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About me</h3>
          <p>
            This is my personal website where you can learn a little more about
            me.
          </p>
          <div className="social-icons">
            <a href="#" className="icon twitter"></a>
            <a href="#" className="icon facebook"></a>
            <a href="#" className="icon instagram"></a>
          </div>
        </div>
        <div className="footer-section">
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
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Financial Advisory</li>
            <li>Data Analysis</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Have questions?</h3>
          <ul>
            <li>
              <i className="icon location"></i> Lima, Perú
            </li>
            <li>
              <i className="icon phone"></i> +51 991139451
            </li>
            <li>
              <i className="icon email"></i> jvegar@uni.pe
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
