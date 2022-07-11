import type { NextPage } from 'next'
import Head from 'next/head'
import { Card } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joe Milne</title>
        <meta name="description" content="Welcome to my inter-web space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome! Take a look around...
        </h1>
        <Card href='/articles'>
          Do you like the news?
          Take a look at some top stories in my news feed
        </Card>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
