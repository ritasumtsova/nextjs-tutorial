import { FC } from 'react'

interface HeadingProps {
  tag?: any;
  text: string
}

const Heading: FC<HeadingProps> = ({ tag, text }) => {
  const Tag = tag || 'h1'

  return <Tag>{text}</Tag>
}

export default Heading