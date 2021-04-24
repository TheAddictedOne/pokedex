import Head from 'next/head'
import { container } from './layout.module.css'
import { centered } from '../styles/utils.module.css'

export default function Layout({ children, home }) {
  return (
    <div className={container}>
      <Head>
        <title>{home ? 'Home page' : 'Not home page'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
