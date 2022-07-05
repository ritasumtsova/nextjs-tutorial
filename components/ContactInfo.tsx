import { FC } from 'react'
import { Contact } from '../pages/contacts'
import Heading from './Heading'

interface ContactInfoProps {
  contact: Contact
}

const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { name, email } = contact;

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email:</strong> {email}
      </div>
    </>
  )
}

export default ContactInfo
