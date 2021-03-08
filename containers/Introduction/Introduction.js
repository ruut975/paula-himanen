import Image from "next/image";
import styles from "./Introduction.module.css";
import ReadMoreLink from "../../UI/ReadMoreLink/ReadMoreLink";

const Introduction = (props) => {
  let text = "long text"
  let link = null;
  let imageShow = false;
  let image = null;
  const imageSrc = "";
  const imageAlt = "";
  const imageWidth = 333;
  const imageHeight = 500;

  imageShow &&
    (image = (
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    ));

  if (props.short) {
    text = "short text"
    link = (
      <ReadMoreLink
        path={props.readMorePath}
        className={styles.link}
        bold
        white
        hoverGreen
      >
        Lue Lisää Paulasta
      </ReadMoreLink>
    );
    image = null;
  }

  return (
    <section className={styles.introduction}>
      {image}
      <p className={styles.text}>{text}</p>
      {link}
    </section>
  );
};

export default Introduction;
