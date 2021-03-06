import React from 'react'
import styles from './SocialIcons.module.css'
import InstagramIcon from '../../public/instagram-icon.svg';
import TwitterIcon from '../../public/twitter-icon.svg';
import FacebookIcon from '../../public/facebook-icon.svg';

const SocialIcons = () => (
      <div className={styles.socialFlex}>
         <FacebookIcon className={styles.icon}></FacebookIcon>
         <TwitterIcon className={styles.icon}></TwitterIcon>
         <InstagramIcon className={styles.icon}></InstagramIcon>
      </div>
)
 
 export default SocialIcons;