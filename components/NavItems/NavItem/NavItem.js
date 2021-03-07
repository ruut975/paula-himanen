import Link from "next/link";
import styles from "./NavItem.module.css";

const NavItem = (props) => (
  <div className={styles.navItem}>
    <Link href={props.path}>
      <a>{props.children}</a>
    </Link>
  </div>
);

export default NavItem;
