import { useState, useEffect } from "react";
import { useScrollPosition } from "./useScrollPosition";
import styles from "./Header.module.css";
import NavItems from "./NavItems";

// New custom hook for scroll spy
const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const currentSection = sectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return (
            scrollPosition >= offsetTop - offset &&
            scrollPosition < offsetTop + offsetHeight - offset
          );
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const isScrolled = useScrollPosition();

  // Add your section IDs here
  const sectionIds = [
    "home-section",
    "about-section",
    "resume-section",
    "services-section",
    "projects-section",
    "contact-section",
  ];
  const activeSection = useScrollSpy(sectionIds);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = () => {
    setIsNavVisible(false);
  };

  return (
    <nav
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
      id="header"
    >
      <div className={styles.headerContainer}>
        <a className={styles.headerBrand} href="index.html">
          <span className={styles.headerBrandHighlight}>J</span>ose Eduardo
        </a>
        <button
          className={styles.headerToggle}
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavVisible}
          aria-label="Toggle navigation"
        >
          <span className={styles.headerToggleIcon}></span> Menu
        </button>

        <div
          className={`${styles.headerNav} ${isNavVisible ? styles.show : ""}`}
          id="header-nav"
        >
          <NavItems
            activeLink={`#${activeSection}`}
            onLinkClick={handleLinkClick}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
