import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <Image src="/logo.png" width="60" height="60" alt="logo"/>
      <div className={styles.links}>
        {navigation.map(({ id, title, path}) => {
          return (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : undefined}>{title}</a>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
