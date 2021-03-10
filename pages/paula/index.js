import Head from "next/head";
import Prismic from '@prismicio/client'
import { Client } from '../../prismic-configuration'
import Introduction from "../../containers/Introduction/Introduction";


const Paula = ({ intro }) => {
  const short = false;
  return (
    <>
      <Head>
        <title>Esittely | Paula Himanen</title>
        <meta
          name="Paula Himanen Esittely"
          content="Paula Himanen Esittely"
        ></meta>
      </Head>
      <div>
        <Introduction short={short} data={intro.data}/>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const client = Client()

  const intro = await client.query(
    Prismic.Predicates.at("document.type", "introduction")
  )

  return {
    props: {
      intro: intro.results[0],
    }
  }
}

export default Paula;
