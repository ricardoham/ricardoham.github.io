import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Portfolio!
        </h1>

        <p className={styles.description}>
          My name is Ricardo Tadeu Manoel Junior,
          I'm from Brazil I live on Campinas city, knows as Princesa do Oeste, the third most populous municipality in São Paulo state
          And consider one of biggest center of technology and research in Latin America.
        </p>

        <p className={styles.description}>
          I graduate from University of Campinas - Unicamp in 2016 with a degree in Analysis and Software Development.
          In there I also performed a scientific study with the theme: Study of Failures on Virtual Machines in the Cloud Computing.
        </p>
      </main>
    </div>
  )
}
