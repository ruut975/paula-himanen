import Head from "next/head";
import Introduction from "../containers/Introduction/Introduction";
import Prismic from "@prismicio/client";
import { Client } from "../prismic-configuration";

export default function Home({ intro }) {
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
        <Introduction short={short} readMorePath="/paula" data={intro.data} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = Client();

  const intro = await client.query(
    Prismic.Predicates.at("document.type", "introduction")
  );

  return {
    props: {
      intro: intro.results[0],
    },
  };
}
