import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import ReadMoreLink from "../../../UI/ReadMoreLink/ReadMoreLink";


import styles from "./SummaryItem.module.css";

const SummaryItem = ({ summary }) => {
  const data = summary.data
  const summaryTitle = RichText.asText(data.title) ? RichText.asText(data.title) : 'Untitled'
  const summaryDescription = <RichText render={data.description} /> 
  const imageSrc = data.background_image?.url;
  const imageAlt = data.background_image?.alt;
  const imageWidth = data.background_image?.dimensions?.width;
  const imageHeight = data.background_image?.dimensions?.height;
  const linkText = RichText.asText(data.link_text) ? RichText.asText(data.link_text) : 'Untitled'
  const readMoreLinkPath = RichText.asText(data.read_more_link_path) ? RichText.asText(data.read_more_link_path) : null

  return (
    <div className={styles.summaryItem}>
      <h1 className={styles.summaryTitle}>{summaryTitle}</h1>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className={styles.summaryDescription}>{summaryDescription}</div>
      {readMoreLinkPath !== null 
      ? <div className={styles.readMoreLink}><ReadMoreLink hoverGreen flexStart path={readMoreLinkPath}>{linkText}</ReadMoreLink></div>
      : null }
    </div>
  );
};

export default SummaryItem;
