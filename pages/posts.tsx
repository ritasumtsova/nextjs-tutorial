import type { NextPage } from 'next'
import Head from 'next/head'
import Heading from '../components/Heading'

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
    </>
  )
}

export default Posts
