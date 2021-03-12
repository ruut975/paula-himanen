import SliceZone from "../../SliceZone/SliceZone";
import styles from "./TabBody.module.css";

const TabBody = ({ theme }) => {
  return (
    <div className={styles.tabBody}>
      <SliceZone body={theme.data.body} />
    </div>
  );
};

export default TabBody;
