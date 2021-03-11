import Head from "next/head";
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'
import Introduction from "../containers/Introduction/Introduction";
import BlogPostCards from '../components/BlogPostCards/BlogPostCards'

export default function Home({ intro, posts }) {
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
        <BlogPostCards posts={posts} />
        <Introduction short={short} readMorePath="/paula" data={intro.data} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = Client()

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
      orderings: "[my.post.date desc]"
    },
  )
  
  const intro = await client.query(
    Prismic.Predicates.at("document.type", "introduction")
  );

  return {
    props: {
      posts: posts ? posts.results : [],
      intro: intro.results[0],
    }
  }
}
