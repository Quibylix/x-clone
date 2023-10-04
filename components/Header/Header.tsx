"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  const pageTitle = pathname === "/" ? "Home" : "Page";

  return (
    <header className={styles.header} aria-label={pageTitle}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          For you
        </Link>
        <Link className={styles.link} href="/">
          Following
        </Link>
      </div>
    </header>
  );
}
