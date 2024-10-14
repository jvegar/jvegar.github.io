import styles from "./Header.module.css";
import { Link } from "react-scroll";

interface NavItemProps {
  href: string;
  text: string;
  isActive: boolean;
  onClick: (href: string) => void;
}

function NavItem({ href, text, isActive, onClick }: NavItemProps) {
  return (
    <li className={styles.headerNavItem}>
      <Link
        to={href.split("#")[1]}
        className={`${styles.headerNavLink} ${
          isActive ? styles.headerNavLinkActive : ""
        }`}
        smooth={true}
        duration={500}
        onClick={() => onClick(href)}
      >
        <span>{text}</span>
      </Link>
    </li>
  );
}

interface NavItemsProps {
  activeLink: string;
  onLinkClick: (href: string) => void;
}

function NavItems({ activeLink, onLinkClick }: NavItemsProps) {
  const items = [
    { href: "#home-section", text: "Home" },
    { href: "#about-section", text: "About me" },
    { href: "#resume-section", text: "Resume" },
    { href: "#services-section", text: "Services" },
    { href: "#projects-section", text: "Projects" },
    { href: "#contact-section", text: "Contact" },
    { href: "#my-platform-section", text: "My Platform" },
  ];

  return (
    <ul className={styles.headerNavList}>
      {items.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          text={item.text}
          isActive={activeLink === item.href}
          onClick={onLinkClick}
        />
      ))}
    </ul>
  );
}

export default NavItems;
