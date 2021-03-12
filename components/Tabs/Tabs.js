import { withRouter } from "next/router"
import styles from './Tabs.module.css'
import Tab from './Tab/Tab'

const Tabs = ({ router, themes }) => {
  // const {
  //   query: { tab }
  // } = router

  // const isTabOne = tab === "1" || tab == null
  // const isTabTwo = tab === "2"
  return (
      <div className={styles.tabHead}>
        {themes.map(theme => (
          <Tab key={theme.id} theme={theme}/>
        ))}
      </div>
  )
}

export default Tabs;