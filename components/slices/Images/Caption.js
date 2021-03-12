import { RichText } from 'prismic-reactjs'
import styles from './Caption.module.css'

/**
 * Image caption component
 */
const Caption = ({ caption }) => {
  if (RichText.asText(caption) !== '') {
    return (
      <p className={styles.caption}>
        <i>
          {RichText.asText(caption)}
        </i>
      </p>
    )
  }

  return null
}

export default Caption
