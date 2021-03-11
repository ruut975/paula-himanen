import Image from "next/image";
import styles from "./Introduction.module.css";
import ReadMoreLink from "../../UI/ReadMoreLink/ReadMoreLink";
import { RichText } from "prismic-reactjs";

const Introduction = (props) => {
  const { short, readMorePath, data } = props;

  let text = <RichText render={data.finnish_full} />;
  let link = null;
  let image = null;
  let imageShow = data.show_image;
  const imageSrc = data.image.url;
  const imageAlt = data.image.alt;
  const imageWidth = data.image.dimensions?.width;
  const imageHeight = data.image.dimensions?.height;

  if (imageShow && imageSrc) {
    image = (
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          loading="eager"
        />
      </div>
    );
  }

  if (short) {
    text = <RichText render={data.finnish_short} />;
    link = (
      <ReadMoreLink
        path={readMorePath}
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
      <div className={styles.text}>{text}</div>
      {link}
    </section>
  );
};

export default Introduction;
