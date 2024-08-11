// src/pages/_app.tsx
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@app/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Satoshi:wght@100;200;300;400;500;600;700;800;900&display=swap" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
