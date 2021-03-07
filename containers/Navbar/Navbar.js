import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

import Logo from "../../components/Logo/Logo";
import NavItems from "../../components/NavItems/NavItems";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuClosedHandler = () => {
    setShowMenu(false);
  };

  const menuToggleHandler = () => {
    setShowMenu((prevState) => {
      return !prevState;
    });
  };

  let iconSrc = "/menu-icon.svg";
  if (showMenu) {
    iconSrc = "/x-mark-icon.svg";
  }

  return (
    <nav className={styles.navbarFlex}>
      <div className={styles.wrapper}>
        <a href="/">
          <Logo />
        </a>
        <a href="#" className={styles.toggleNav}>
          <Image
            src={iconSrc}
            alt="menu"
            width={20}
            height={20}
            onClick={menuToggleHandler}
          />
        </a>
      </div>
      <NavItems open={showMenu} closed={menuClosedHandler} />
    </nav>
  );
};

export default Navbar;
