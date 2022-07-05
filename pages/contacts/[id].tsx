import type { NextPage } from 'next'
import Head from 'next/head'
import { Contact } from '../contacts/index'
import ContactInfo from '../../components/ContactInfo'

interface ContactProps {
  contact: Contact
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