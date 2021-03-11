import Head from "next/head";
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'
import Introduction from "../containers/Introduction/Introduction";
import BlogPostCards from '../components/BlogPostCards/BlogPostCards'


export default function Home({ posts }) {
  console.log(posts)
  const short = true;

  return (
    <>
      <Head>
        <title>Paula Himanen | Koti</title>
        <meta
          name="Paula Himanen Kotisivu"
          content="Paula Himanen Kotisivu"
        ></meta>
      </Head>
      <div>
        <Introduction short={short} readMorePath="/paula" />
        <BlogPostCards posts={posts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const { ref } = previewData

  const client = Client()

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
      orderings: "[my.post.date desc]"
    },
  )

  return {
    props: {
      posts: posts ? posts.results : [],
      // preview
    }
  }
}