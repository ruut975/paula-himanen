import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => (
  <div className={styles.flexContainer}>
    <h3 className={styles.header}>Ota Yhteyttä</h3>
    <p>Paula Himanen</p>
    <a
      href="mailto:paula.himanen@vihreat.fi"
      target="_blank"
      rel="noopener noreferrer"
    >
      paula.himanen@vihreat.fi
    </a>
    <a href="tel:+358-405059634" rel="nofollow">
      puh: 0405059634
    </a>
  </div>
);

export default ContactInfo;
