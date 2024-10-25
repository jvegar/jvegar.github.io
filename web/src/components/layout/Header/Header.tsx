import { useState } from "react";
import { useScrollPosition } from "./useScrollPosition";
import styles from "./Header.module.css";
import NavItems from "./NavItems";
import { useScrollSpyContext } from "./useScrollSpyContex";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const isScrolled = useScrollPosition();

  const { activeSection } = useScrollSpyContext();

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
        <a className={styles.headerBrand} href="/">
          <span className={styles.headerBrandHighlight}>J</span>ose Eduardo
        </a>
        <button
          className={styles.headerToggle}
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavVisible}
          aria-label="Toggle navigation"
        >
          <span
            className={`${styles.headerToggleIcon} ${
              isNavVisible ? styles.open : ""
            }`}
          ></span>
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
