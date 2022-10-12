import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <h1 className='p-96'>This is body</h1>
      <Footer></Footer>
    </div>
  )
}

export default Home
