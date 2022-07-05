import type { NextPage } from 'next'
import Heading from '../components/Heading'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="Home page" />
      </div>
    </>

  )
}

export default Home
