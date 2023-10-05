import { Header, Navbar, PostIcon, Tweet, XIcon } from "@/components";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Home / X",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbarContainer}>
        <Navbar />
        <Link href="/" className={styles.postLink}>
          <span className={styles.postLinkIcon}>
            <PostIcon />
          </span>
          <span className={styles.postLinkLabel}>Post</span>
        </Link>
      </div>
      <div className={styles.logo}>
        <Link className={styles.logoLink} href="/">
          <XIcon />
        </Link>
      </div>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <section className={styles.tweets}>
        <Tweet
          avatarUrl="https://gravatar.com/avatar/ba79001e355f4092cd4b47df9d1070a2?s=400&d=robohash&r=x"
          profileName="Bot1"
          handle="bot1"
          content="This is a test tweet"
          comments={1}
          retweets={2}
          likes={3}
          views={4}
        />
        <Tweet
          avatarUrl="https://gravatar.com/avatar/252cb8ef15e0b121cbe9d54f051d3150?s=400&d=retro&r=x"
          profileName="Bot2"
          handle="bot2"
          content={`This is a tweet with
a line break.`}
          comments={1}
          retweets={2}
          likes={3}
          views={4}
        />
      </section>
    </main>
  );
}
