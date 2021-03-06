import React from 'react'
import styles from './ContactInfo.module.css'

const ContactInfo = () => (
   <div className={styles.flexContainer}>
     <h3 className={styles.header}>Ota Yhteyttä</h3>
     <p className={styles.text}>Paula Himanen</p>
     <a href="mailto:paula.himanen@vihreat.fi" target="_blank" rel="noopener noreferrer" className={styles.text}>paula.himanen@vihreat.fi</a>
     <a href="tel:+358-405059634" rel="nofollow" className={styles.text}>puh: 0405059634</a>
   </div>
)
 
 export default ContactInfo;