import Link from "next/link";
import {
  BookmarkIcon,
  CommunityIcon,
  ExploreIcon,
  HomeIcon,
  ListIcon,
  MessageIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  XIcon,
} from "../Icons";
import styles from "./Navbar.module.css";

type NavbarLinkProps = {
  href: string;
  label: string;
};

export default function NavbarLink({ href, label }: NavbarLinkProps) {
  return (
    <Link className={styles.link} href={href}>
      <span className={styles.linkIcon}>
        <NavbarIconFromLabel label={label} />
      </span>
      <span className={styles.linkLabel}>{label}</span>
    </Link>
  );
}

type NavbarIconFromLabelProps = {
  label: string;
};

function NavbarIconFromLabel({ label }: NavbarIconFromLabelProps) {
  switch (label) {
    case "Home":
      return <HomeIcon />;
    case "Explore":
      return <ExploreIcon />;
    case "Notifications":
      return <NotificationIcon />;
    case "Messages":
      return <MessageIcon />;
    case "Lists":
      return <ListIcon />;
    case "Bookmarks":
      return <BookmarkIcon />;
    case "Communities":
      return <CommunityIcon />;
    case "Premium":
      return <XIcon />;
    case "Profile":
      return <ProfileIcon />;
    case "More":
      return <MoreIcon />;
    default:
      return <XIcon />;
  }
}
