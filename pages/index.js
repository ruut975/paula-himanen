import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.css'
import Footer from '../containers/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paula Himanen</title>
        <link href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"></link>
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
