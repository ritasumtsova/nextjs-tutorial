import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'
import Heading from '../components/Heading'
import styles from '../styles/404.module.scss'

const NotFound: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="404"/>
        <Heading tag="h2" text="Oops, the page is not found"/>
      </div>
    </>
  )
}

export default NotFound