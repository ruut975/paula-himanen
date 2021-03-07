import "sanitize.css";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Paula Himanen</title>
        <meta
          name="format-detection"
          content="telephone=no"
          key="format-detection"
        ></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
