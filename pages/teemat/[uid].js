import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { Client } from "../../prismic-configuration";
import Tabs from "../../components/Tabs/Tabs";
import TabBody from "../../components/Tabs/TabBody/TabBody";

const LoadedTab = ({ themes, theme }) => {
  if (themes && theme) {
 
    return (
      <>
        <Head>
          <title>Teemat | Paula Himanen</title>
          <meta
            name="Paula Himanen Teemat"
            content="Paula Himanen Teemat"
          ></meta>
        </Head>
          <Tabs themes={themes} theme={theme} />
          {/* <TabBody theme={theme} /> */}
      </>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {
  const client = Client();

  const theme = await client.getByUID("theme", params.uid);

  const themes = await client.query(
    Prismic.Predicates.at("document.type", "theme"),
    {
      orderings: "[my.theme.order_number]",
    }
  );


  return {
    props: {
      theme,
      themes: themes ? themes.results : [],
    },
  };
}

export async function getStaticPaths() {
  const client = Client();

  const themes = await client.query(
    Prismic.Predicates.at("document.type", "theme"),
    {
      orderings: "[my.theme.order_number]",
    }
  );

  return {
    paths: themes.results.map((theme) => `/teemat/${theme.uid}`),
    fallback: true,
  };
}

export default LoadedTab;