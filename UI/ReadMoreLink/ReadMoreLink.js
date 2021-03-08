import Image from "next/image";
import styles from "./ReadMoreLink.module.css";

const ReadMoreLink = (props) => {
  let readMoreLinkClasses = [styles.readMoreLink, props.className];
  let textClasses = [styles.text];
  textClasses = props.bold
    ? [...textClasses, styles.text, styles.bold]
    : textClasses;
  textClasses = props.white
    ? [...textClasses, styles.text, styles.white]
    : textClasses;
  textClasses = props.hoverGreen
    ? [...textClasses, styles.text, styles.hoverGreen]
    : textClasses;

  return (
    <a href={props.path} className={readMoreLinkClasses.join(" ")}>
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
  );
};

export default ReadMoreLink;
