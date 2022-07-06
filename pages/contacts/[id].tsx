import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Contact } from '../../types'
import ContactInfo from '../../components/ContactInfo'

interface ContactProps {
  contact: Contact
}

// SSR
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contact: data },
  }
}

const Contact: NextPage<ContactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  )
}

export default Contact