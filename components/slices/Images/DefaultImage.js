import styles from './DefaultImage.module.css'

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url
  const imageAlt = slice.primary.image.alt

  return (
    <div className={styles.imageSlice}>
        <img src={imageUrl} alt={imageAlt} />
    </div>
  )
}

export default DefaultImage
