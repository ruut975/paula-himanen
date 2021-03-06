import Image from "next/image";
import styles from "./SocialIcons.module.css";

const SocialIcons = () => (
  <div className={styles.socialFlex}>
    <a
      href="https://www.facebook.com/himanenpaulavihreat/"
      rel="noopener noreferrer"
    >
      <Image src="/facebook-icon.svg" alt="facebook" width={35} height={35} />
    </a>
    <a
      href="https://twitter.com/himanenpaula?lang=en"
      rel="noopener noreferrer"
    >
      <Image src="/twitter-icon.svg" alt="twitter" width={35} height={35} />
    </a>
    <a href="#">
      <Image src="/instagram-icon.svg" alt="instagram" width={35} height={35} />
    </a>
  </div>
);

export default SocialIcons;
