import Head from 'next/head'
import Link from 'next/link'

import Footer from '../containers/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paula Himanen</title>
      </Head>

      <main className={styles.main}>
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
  )
}
