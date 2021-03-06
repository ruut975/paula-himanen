import React from 'react'
import styles from './Footer.module.css'
import SocialIcons from '../../components/SocialIcons/SocialIcons'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import Logo from '../../components/Logo/Logo'

const Footer = () => (
   <footer className={styles.footerFlex}>
         <div className={styles.wrapperFlex}>
         <Logo />
         </div>
         <SocialIcons />
         <ContactInfo />
   </footer>
)
 
 export default Footer;