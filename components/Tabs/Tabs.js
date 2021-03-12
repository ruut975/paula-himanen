import { useRouter } from "next/router";
import styles from "./Tabs.module.css";
import Tab from "./Tab/Tab";
import TabBody from "./TabBody/TabBody";

const Tabs = ({ themes, theme }) => {
  const router = useRouter();
  const {
    query: { uid },
  } = router;

  return (
    <section className={styles.tabsSection}>
      <div className={styles.tabHead}>
        {themes.map((theme) => {
          if (theme.uid === uid) {
            return <Tab key={theme.id} theme={theme} selected />;
          } else {
            return <Tab key={theme.id} theme={theme} />;
          }
        })}
      </div>
      <TabBody theme={theme} />
    </section>
  );
};

export default Tabs;
