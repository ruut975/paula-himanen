import Link from "next/link";
import { RichText } from "prismic-reactjs";
import styles from "./Tab.module.css";

const Tab = ({ theme, selected }) => {
  const linkText = RichText.asText(theme.data.tab_text)
    ? RichText.asText(theme.data.tab_text)
    : "Untitled";

  let classes = [styles.tab];
  classes = selected ? [...classes, styles.selected] : [...classes];

  return (
    <div className={classes.join(" ")} selected={theme.data.order_number}>
      <Link as={`/teemat/${theme.uid}`} href={`/teemat/${encodeURIComponent(theme.uid)}`}>
        <a className={styles.linkText}>{linkText}</a>
      </Link>
    </div>
  );
};

export default Tab;
