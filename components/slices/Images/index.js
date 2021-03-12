import ImageWithCaption from './ImageWithCaption'
import DefaultImage from './DefaultImage'

/**
 * Image caption slice component
 */
const Images = ({ slice }) => {

  const imageComponent =
  slice.slice_label === null ? 
  <DefaultImage slice={slice} /> :
  <ImageWithCaption slice={slice} />


  return (
    <>
      {imageComponent}
    </>
  )
}

export default Images

