import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '@views/Home';
import WithoutAuth from '@components/hoc/withoutAuth';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Redator App</title>
      <meta name="description" content="Redator app by AndromedaLabs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePage />
  </div>
);

export default Home;
