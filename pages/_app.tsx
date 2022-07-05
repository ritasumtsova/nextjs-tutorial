import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
// import Image from 'next/image'
// import youtubeImg from '../public/youtube.png'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image 
        src={youtubeImg}
        alt="youtube image"
        width="500"
        height="350"
        placeholder="blur"
      /> */}
    </Layout>
  )
}

export default MyApp
