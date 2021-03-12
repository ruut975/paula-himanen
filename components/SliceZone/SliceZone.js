import { SecondaryTitle, Text, Quote, Images } from '../slices'
import ImageWithCaption from '../slices/Images/ImageWithCaption'

/**
 * Post slice zone component
 */
const SliceZone = ({ body }) => (
  body.map((slice, index) => {
    switch (slice.slice_type) {
      case ('image_with_caption'):
        return <ImageWithCaption slice={slice} key={`slice-${index}`} />
      case ('quote'):
        return <Quote slice={slice} key={`slice-${index}`} />
      case ('rich_text'):
        return <Text slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })
)

export default SliceZone
