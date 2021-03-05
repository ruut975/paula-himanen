import React from 'react'
import styles from './Footer.module.css'
import SocialIcons from '../../components/SocialIcons/SocialIcons'
import ContactInfo from '../../components/ContactInfo/ContactInfo'

const Footer = () => (
   <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
         <a href="#" className={styles.logo}>Logo</a>
         <SocialIcons />
         <ContactInfo />
      </div>
   </footer>
)
 
 export default Footer;