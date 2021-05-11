//NOTE: You can import/use a global style sheet, but it must be put in here
import '../styles/globals.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
