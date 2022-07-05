import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
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

export interface Contact {
  id: number;
  name: string;
  email?: string;
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
      <h1>Contacts list:</h1>
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