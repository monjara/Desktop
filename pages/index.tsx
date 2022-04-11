import type { NextPage } from 'next'
import Head from 'next/head'
import Desktop from '../components/desktop'

const Home: NextPage = () => {
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/Desktop' : ''
  return (
    <>
      <Head>
        <title>Desktop</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href={`${urlPrefix}/favicon.ico`} />
      </Head>
        <Desktop />
    </>
  )
}

export default Home
