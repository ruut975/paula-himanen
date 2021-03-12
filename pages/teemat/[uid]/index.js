import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Prismic from "@prismicio/client";
import { Client } from "../../../prismic-configuration";
import TabsLayout from '../../../layouts/TabsLayout'
import TabBody from '../../../components/Tabs/TabBody/TabBody'

const LoadedTab = ({ themes, theme }) => {
  const tabText = RichText.asText(theme.data.tab_text) ? RichText.asText(theme.data.tab_text) : "Untitled";

  return (
    <>
      <Head>
        <title>{tabText} | Paula Himanen</title>
        <meta name="Paula Himanen Teemat" content="Paula Himanen Teemat"></meta>
      </Head>
      <TabsLayout themes={themes}>
        <TabBody theme={theme} />
      </TabsLayout>
    </>
  );
};

export async function getStaticProps({ params }) {

  const client = Client()

  const theme = await client.getByUID("theme", params.uid);

  const themes = await client.query(
    Prismic.Predicates.at("document.type", "theme"), {
      orderings: "[my.theme.order_number]"
    },
  )

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