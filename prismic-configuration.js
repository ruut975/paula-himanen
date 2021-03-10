import Prismic from '@prismicio/client'
import { RichText } from 'prismic-reactjs';

export const API_ENDPOINT = process.env.PRISMIC_API_ENDPOINT
export const ACCESS_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(API_ENDPOINT, createClientOptions(req, ACCESS_TOKEN))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
