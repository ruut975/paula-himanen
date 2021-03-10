import Image from "next/image";
import styles from "./PostDate.module.css";

const PostDate = ({ date }) => {
  // Format the date to dd.M.YYYY
  const displayDate = date.split("-").reverse().join(".");

  return (
    <div className={styles.date}>
      <div className={styles.imageWrapper}>
        <Image src="/calendar-icon.svg" alt="blogi" width={14} height={14} />
      </div>
      <time className={styles.time}>{displayDate}</time>
    </div>
  );
};

export default PostDate;
