import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";
import Footer from "../containers/Footer/Footer";

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
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.mainFlex}>
        <header className={styles.headerFlex}>
          <img></img>
          <nav className={styles.navFlex}>
            <Link href="/paula">
              <a>Paula</a>
            </Link>
            <Link href="/teemat">
              <a>Teemat</a>
            </Link>
            <Link href="/kuntavaalit-2021">
              <a>Kuntavaalit 2021</a>
            </Link>
            <Link href="/blogi">
              <a>Blogi</a>
            </Link>
          </nav>
        </header>
      </main>
      <Footer />
    </div>
  );
}
