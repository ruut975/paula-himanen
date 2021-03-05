import React from 'react'
import styles from './ContactInfo.module.css'

const ContactInfo = () => (
   <div className={styles.flexContainer}>
     <h5>Ota Yhteyttä</h5>
     <p className={styles.text}>Paula Himanen</p>
     <p className={styles.text}>paula.himanen@vihreat.fi</p>
     <p className={styles.text}>puh: 0405059634</p>
   </div>
)
 
 export default ContactInfo;