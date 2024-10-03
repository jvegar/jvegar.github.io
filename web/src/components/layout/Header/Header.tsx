import { useState } from "react";
import { useScrollPosition } from "./useScrollPosition";
import styles from "./Header.module.css";
import NavItems from "./NavItems";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("#home-section");
  const isScrolled = useScrollPosition();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
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
          <NavItems activeLink={activeLink} onLinkClick={handleLinkClick} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
