import type { NextPage } from 'next';
import Head from 'next/head';

import Contact from '@/components/index/contact';
import Experience from '@/components/index/experience';
import Footer from '@/components/common/footer';
import Jumbotron from '@/components/index/jumbotron';
import Navbar from '@/components/navbar';
import Page from '@/components/common/page';
import Portfolio from '@/components/index/portfolio';
import Position from '@/components/index/position';
import Technologies from '@/components/index/technologies';

import styles from './index.module.sass';

const Home: NextPage = () => {
  return (
    <Page>
      <div className={styles.index}>
        <Head>
          <title>Jireh June Nimes</title>
          <meta name="description" content="My portfolio website." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <Jumbotron/>
        <Experience/>
        <Position/>
        <Portfolio/>
        <Technologies/>
        <Contact/>
        <Footer/>
      </div>
    </Page>
  )
}

export default Home;
