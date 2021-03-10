import Image from "next/image";
import { RichText } from "prismic-reactjs";
import styles from "./PostAuthor.module.css";

const PostAuthor = ({ author }) => {
  const displayedAuthor = RichText.asText(author);
  return (
    <div className={styles.author}>
      <div className={styles.imageWrapper}>
        <Image src="/person-icon.svg" alt="blogi" width={14} height={14} />
      </div>
      <time className={styles.name}>{displayedAuthor}</time>
    </div>
  );
};

export default PostAuthor;
