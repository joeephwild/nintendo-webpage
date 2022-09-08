import Head from 'next/head';
import Image from 'next/image';
import NavMenu from '../components/NavMenu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nintendo Official Clone</title>
        <meta name="description" content="A  game console for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavMenu />
    </div>
  )
}
