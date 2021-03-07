import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
import Backdrop from "../../UI/Backdrop/Backdrop";

const NavItems = (props) => {
  let attachedClasses = [styles.navItems, styles.close];
  if (props.open) {
    attachedClasses = [styles.navItems, styles.open];
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <NavItem path={"/paula"}>Paula</NavItem>
        <NavItem path={"/teemat"}>Teemat</NavItem>
        <NavItem path={"/kuntavaalit-2021"}>Kuntavaalit 2021</NavItem>
        <NavItem path={"/blogi"}>Blogi</NavItem>
        {props.open && <NavItem path={"/eng"}>In English</NavItem>}

      </div>
      <button className={styles.inEnglish}><a href="/eng">In English</a></button>
    </>
  );
};

export default NavItems;
