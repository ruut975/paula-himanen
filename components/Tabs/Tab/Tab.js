import Link from "next/link"
import Router from 'next/router'
import { RichText } from "prismic-reactjs";
import styles from './Tab.module.css'

const Tab = ({ theme }) => {
const linkText = RichText.asText(theme.data.tab_text) ? RichText.asText(theme.data.tab_text) : "Untitled"

  return (
    <div className={styles.tab} selected={theme.data.order_number}>
    <Link
        as={`/teemat/${theme.uid}`}
        href='/teemat/[uid]'
      >
        <a className={styles.linkText}>
          {linkText}
        </a>
      </Link>
  </div>
  );
}
 
export default Tab;