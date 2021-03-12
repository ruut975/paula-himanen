import { useEffect } from 'react';
import Head from "next/head";
import { useRouter } from 'next/router'
import Prismic from '@prismicio/client'
import { Client } from '../../prismic-configuration'
import TabsLayout from '../../layouts/TabsLayout'

const Teemat = ({ themes }) => {
  const router = useRouter()

  const firstThemeUID = themes[0].data.uid;

  // useEffect(() => {
  //   router.replace(`/teemat/${firstThemeUID}`)
  // },[]);

  return (
    <>
      <Head>
        <title>Teemat | Paula Himanen</title>
        <meta name="Paula Himanen Teemat" content="Paula Himanen Teemat"></meta>
      </Head>
      <TabsLayout themes={themes}/>
    </>
  );
};

export async function getStaticProps() {

  const client = Client()

  const themes = await client.query(
    Prismic.Predicates.at("document.type", "theme"), {
      orderings: "[my.theme.order_number]"
    },
  )

  return {
    props: {
      themes: themes ? themes.results : [],
    }
  }
}


export default Teemat;
