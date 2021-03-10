import Link from 'next/link'
import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
import Backdrop from "../../UI/Backdrop/Backdrop";

const NavItems = (props) => {
  const paulaPath = "/paula";
  const teematPath = "/teemat";
  const kuntavaalitPath = "/kuntavaalit-2021";
  const blogiPath = "/blogi";
  const engPath = "/eng";
  let attachedClasses = [styles.navItems, styles.close];
  if (props.open) {
    attachedClasses = [styles.navItems, styles.open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <NavItem path={paulaPath}>Paula</NavItem>
        <NavItem path={teematPath}>Teemat</NavItem>
        <NavItem path={kuntavaalitPath}>Kuntavaalit 2021</NavItem>
        <NavItem path={blogiPath}>Blogi</NavItem>
        {props.open && <NavItem path={engPath}>In English</NavItem>}
      </div>
      <button className={styles.inEnglish}><Link href={engPath}><a>In English</a></Link></button>
    </>
  );
};

export default NavItems;