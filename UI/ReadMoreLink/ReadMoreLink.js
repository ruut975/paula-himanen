import Link from "next/link";
import Image from "next/image";
import styles from "./ReadMoreLink.module.css";

const ReadMoreLink = (props) => {
  let readMoreLinkClasses = [styles.readMoreLink, props.className];
  readMoreLinkClasses = props.flexStart
    ? [...readMoreLinkClasses, styles.flexStart]
    : readMoreLinkClasses;

  let textClasses = [styles.text];
  textClasses = props.bold ? [...textClasses, styles.bold] : textClasses;
  textClasses = props.white ? [...textClasses, styles.white] : textClasses;
  textClasses = props.hoverGreen
    ? [...textClasses, styles.hoverGreen]
    : textClasses;

  return (
    <Link href={props.path}>
      <a className={readMoreLinkClasses.join(" ")}>
        <div className={styles.imageWrapper}>
          <Image
            src="/arrow-right-icon.svg"
            alt="lue lisää"
            width={14}
            height={14}
          />
        </div>
        <p className={textClasses.join(" ")}>{props.children}</p>
      </a>
    </Link>
  );
};

export default ReadMoreLink;
