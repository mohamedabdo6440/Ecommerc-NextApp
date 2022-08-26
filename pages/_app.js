
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../component/Layout';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
      </Head>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
