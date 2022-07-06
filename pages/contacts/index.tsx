import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/Heading'
import { Contact } from '../../types'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
}

interface ContactsProps {
  contacts: Contact[]
}

const Contacts: NextPage<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts && contacts.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`contacts/${id}`}>
                {name}
              </Link> 
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Contacts
