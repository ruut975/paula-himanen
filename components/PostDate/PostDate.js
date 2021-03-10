import Image from "next/image";
import styles from "./PostDate.module.css";

const PostDate = ({ date }) => {
  // Format the date to dd.MM.YYYY
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const displayDate = `${day}.${month}.${year}`

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
