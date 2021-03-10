import Head from "next/head";
import Posts from '../../components/Posts/Posts'
import Prismic from '@prismicio/client'
import { Client } from '../../prismic-configuration'

const Blogi = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogi | Paula Himanen</title>
        <meta name="Paula Himanen blogi" content="Paula Himanen blogi"></meta>
      </Head>
      <Posts posts={posts}/>
    </>
  );
};

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



export default Blogi;
