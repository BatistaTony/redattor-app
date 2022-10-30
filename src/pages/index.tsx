import WithAuth from '@components/hoc/withAuth';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Redator App</title>
      <meta name="description" content="Redator app by AndromedaLabs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Redator App</h1>

      <p className={styles.description}>
        by <code className={styles.code}>AndromedaLabs</code>
      </p>
    </main>
  </div>
);

export default WithAuth(Home);
