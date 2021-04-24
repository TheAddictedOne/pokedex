import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/Image'
import Layout from '../../components/layout.js'

export default function FirstPost() {
  return (
    <Layout>
      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a>Back home</a>
        </Link>
      </h2>
      <Image src="/images/profile.jpg" height={144} width={144} alt="My name" />
    </Layout>
  )
}
