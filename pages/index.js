import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.css'
import Footer from '../containers/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.containerFlex}>
      <Head>
        <title>Paula Himanen</title>
        <meta name="format-detection" content="telephone=no" key="format-detection"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
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
          <body>
            <p>ympäristön ehdoilla. Päätöksentekoani ohjaa perinpohjainen perehtyminen asioihin ja niiden taustoihin, eri vaihtoehtojen pohdinta tosiseikkojen pohjalta sekä yhdessä muiden ihmisten kanssa ja päätyminen päätökseen, joka on arvojeni kanssa linjassa. Kolmen lapsen äitinä tunnen Oulun ja lähialueeni tarjoamia palveluja hyvin, minkä pohjalta uskon kykeneväni arvioimaan, missä asioissa kehitystä tarvitaan.



Perusarvoihini kuuluvat rehellisyys, oikeudenmukaisuus, jakamaton ihmisarvon kunnioittaminen, ahkeruus, sinnikkyys ja vastuullisuus omista tekemisistä ja päätöksistä. Demokraattinen päätöksenteko on sivistyksemme ja olemassaolomme ehto, jossa otetaan huomioon enemmistön lisäksi vähemmistön oikeudet. Haluan toimia äänitorvena myös niiden ihmisten puolesta, joilla ei ole siihen voimia.

Yhteiskunnassa lisääntyvälle ahneudelle ja tuloerojen kasvulle haluan panna stopin.</p>
          </body>
       
      </main>
   <Footer />
    </div>
  )
}
