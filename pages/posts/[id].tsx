import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Post } from '../../types'
import Heading from '../../components/Heading'

interface PostProps {
  post: Post
}

// SSG
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data: Post[] = await response.json()

  const paths = data.map(({ id }) => {
    return {
      params: { id: id.toString() }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
}


const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Heading text={post.title} />
      <Heading text={post.body} tag="h4" />
    </>
  )
}

export default Post
