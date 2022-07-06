import type { GetStaticProps, NextPage } from 'next'
import Heading from '../components/Heading'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Data } from '../types'
import Socials from '../components/Socials'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}socials`)
      const data = await response.json()

      if (!data) {
        return {
          notFound: true,
        }
      }

      return {
        props: { socials: data },
      }
  } catch {
    return {
      props: { socials: null },
    }
  }
  
}

interface HomeProps {
  socials: Data[]
}

const Home: NextPage<HomeProps> = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="My first Next.js app" />
        <Socials socials={socials} />
      </div>  
    </>

  )
}

export default Home
