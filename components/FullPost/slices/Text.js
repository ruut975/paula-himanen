import React from 'react'
import { RichText } from 'prismic-reactjs'
import styles from './Text.module.css'

/**
 * Text slice component
 */
const Text = ({ slice }) => (
  <div className={styles.textSlice}>
    <RichText
      render={slice.primary.text}
    />
  </div>
)

export default Text
