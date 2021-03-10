import Caption from './Caption'
import styles from './DefaultImage.module.css'

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url
  const imageAlt = slice.primary.image.alt
  const caption = slice.primary.caption

  return (
    <div className={styles.imageSlice}>
        <img src={imageUrl} alt={imageAlt} />
        <Caption caption={caption} />
    </div>
  )
}

export default DefaultImage
