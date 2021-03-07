import Head from "next/head";
import Router from "next/router";
import styles from "./Home.module.css";
import Footer from "../containers/Footer/Footer";
import Header from "../containers/Header/Header";
import Paula from './paula';
import Teemat from './teemat';
import Kuntavaalit from './kuntavaalit-2021';
import Blogi from './blogi';
import English from './eng';

export default function Home() {
  return (
    <div className={styles.containerFlex}>
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
      <main className={styles.mainFlex}>
        <Header />
        <Paula />
        <Teemat />
        <Kuntavaalit />
        <Blogi />
        <English />
      </main>
      <Footer />
    </div>
  );
}
