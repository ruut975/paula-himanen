import React, { Fragment } from 'react'
import DefaultImage from './DefaultImage'

/**
 * Image caption slice component
 */
const ImageCaption = ({ slice }) => {

  return (
    <Fragment>
      <DefaultImage slice={slice} />
    </Fragment>
  )
}

export default ImageCaption
