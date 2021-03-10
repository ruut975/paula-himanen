import React from "react";
import { RichText } from "prismic-reactjs";
import styles from "./Quote.module.css";

const Quote = ({ slice }) => (
  <div className={styles.quoteSlice}>
    <blockquote className={styles.blockQuotation}>
      {RichText.asText(slice.primary.quote)}
    </blockquote>
  </div>
);

export default Quote;
