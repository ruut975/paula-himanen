import { useState } from 'react'
import Image from "next/image";
import styles from "./Header.module.css";

import Logo from "../../components/Logo/Logo";
import NavItems from '../../components/NavItems/NavItems';

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const menuClosedHandler = () => {
      setShowMenu(false);
  };

  const menuToggleHandler = () => {
      setShowMenu(prevState => {
          return !prevState  
  })};

  const isMobileHandler = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    console.log(vw)
    if (vw >= "768px" ) {
      setIsMobile(false)
    }
    return isMobile;
};


  let iconSrc = "/menu-icon.svg"
  if (showMenu) {
    iconSrc = "/x-mark-icon.svg"
  }

  return (
  <header className={styles.headerFlex}>
    <div className={styles.wrapper}>
    <Logo />
    <a href="#" className={styles.toggleNav}>
      <Image src={iconSrc} alt="menu" width={20} height={20} onClick={menuToggleHandler}/>
    </a>
    </div>
    <NavItems 
      open={showMenu}
      closed={menuClosedHandler}
      isMobile={isMobileHandler}
    />
  </header>
  )
};

export default Header;
