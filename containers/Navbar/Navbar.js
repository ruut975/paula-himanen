import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

  let iconSrc = showMenu ? "/x-mark-icon.svg" : "/menu-icon.svg";

  return (
    <nav className={styles.navbarFlex}>
      <div className={styles.wrapper}>
        <Link href="/">
        <a className={styles.logo}>
          <Logo />
        </a>
        </Link>
        <a href="#" role="button" className={styles.toggleNav} onClick={menuToggleHandler}>
          <Image
            src={iconSrc}
            alt="menu"
            width={20}
            height={20}
          />
        </a>
      </div>
      <NavItems open={showMenu} closed={menuClosedHandler} />
    </nav>
  );
};

export default Navbar;
