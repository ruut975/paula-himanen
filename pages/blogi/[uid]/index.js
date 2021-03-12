import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { Client } from "../../../prismic-configuration";
import FullPost from '../../../components/FullPost/FullPost'

const LoadedPost = ({ post }) => {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

    return (
      <>
        <Head>
        <title>{title} | Paula Himanen</title>
        <meta name="Paula Himanen blogi" content="Paula Himanen blogi"></meta>
        </Head>
       <FullPost post={post} title={title}/>
      </>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {
  const post = await Client().getByUID("post", params.uid);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const client = Client();

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    {
      orderings: "[my.post.date desc]",
    }
  );

  return {
    paths: posts.results.map((post) => `/blogi/${post.uid}`),
    fallback: true,
  };
}

export default LoadedPost;
