import { ExploreIcon } from "../Icons";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form>
      <label className={styles.label}>
        <input className={styles.input} type="search" placeholder="Search" />
        <span className={styles.icon}>
          <ExploreIcon />
        </span>
      </label>
    </form>
  );
}
