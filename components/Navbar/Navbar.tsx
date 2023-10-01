import { navLinks } from "@/constants";
import styles from "./Navbar.module.css";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.linksList}>
        {navLinks.map(({ label, href, displayInMobile }) => (
          <li
            className={`${styles.linksListItem}  ${
              displayInMobile ? styles.displayInMobile : ""
            }`.trim()}
            key={label}
          >
            <NavbarLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
