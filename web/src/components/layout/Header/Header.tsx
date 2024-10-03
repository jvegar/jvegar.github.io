import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("#home-section");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsNavVisible(false);
  };

  return (
    <nav
      className={`header ${isScrolled ? "header--scrolled" : ""}`}
      id="header"
    >
      <div className="header__container">
        <a className="header__brand" href="index.html">
          <span className="header__brand-highlight">J</span>ose Eduardo
        </a>
        <button
          className="header__toggle"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavVisible}
          aria-label="Toggle navigation"
        >
          <span className="header__toggle-icon"></span> Menu
        </button>

        <div
          className={`header__nav ${isNavVisible ? "show" : ""}`}
          id="header-nav"
        >
          <ul className="header__nav-list">
            {[
              { href: "#home-section", text: "Home" },
              { href: "#about-section", text: "About me" },
              { href: "#resume-section", text: "Resume" },
              { href: "#services-section", text: "Services" },
              { href: "#projects-section", text: "Projects" },
              { href: "#contact-section", text: "Contact" },
              { href: "#my-platform-section", text: "My Platform" },
            ].map(({ href, text }) => (
              <li key={href} className="header__nav-item">
                <a
                  href={href}
                  className={`header__nav-link ${
                    activeLink === href ? "header__nav-link--active" : ""
                  }`}
                  onClick={() => handleLinkClick(href)}
                >
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
