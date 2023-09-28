import Image from "next/image";
import {
  CommentIcon,
  LikeIcon,
  RetweetIcon,
  ShareIcon,
  ViewIcon,
} from "../Icons";
import styles from "./Tweet.module.css";

type TweetProps = {
  avatarUrl: string;
  profileName: string;
  handle: string;
  content: string;
  comments: number;
  retweets: number;
  likes: number;
  views: number;
};

export default function Tweet({
  avatarUrl,
  profileName,
  handle,
  content,
  comments,
  retweets,
  likes,
  views,
}: TweetProps) {
  return (
    <article className={styles.tweet}>
      <div>
        <Image
          className={styles.avatar}
          src={avatarUrl}
          alt="Avatar"
          width={40}
          height={40}
        />
      </div>
      <div className={styles.info}>
        <header className={styles.author}>
          <div className={styles.username}>{profileName}</div>
          <div className={styles.handle}>@{handle}</div>
        </header>
        <div className={styles.content}>{content}</div>
        <ul className={styles.actions}>
          <li className={styles.stat}>
            <CommentIcon />
            <span>{comments}</span>
          </li>
          <li className={styles.stat}>
            <RetweetIcon />
            <span>{retweets}</span>
          </li>
          <li className={styles.stat}>
            <LikeIcon />
            <span>{likes}</span>
          </li>
          <div className={styles.stat}>
            <ViewIcon />
            <span>{views}</span>
          </div>
          <ShareIcon />
        </ul>
      </div>
    </article>
  );
}
