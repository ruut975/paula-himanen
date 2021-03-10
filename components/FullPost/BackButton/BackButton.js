import { default as NextLink } from "next/link";
import styles from "./BackButton.module.css";
import Image from "next/image";

const BackButton = () => (
  <NextLink href="/blogi">
    <a className={styles.back}>
      <div className={styles.imageWrapper}>
        <Image src="/arrow-left-icon.svg" alt="blogi" width={14} height={14} />
      </div>
      <p className={styles.text}>Blogi</p>
    </a>
  </NextLink>
);

export default BackButton;
