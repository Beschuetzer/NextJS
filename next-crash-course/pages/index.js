import Head from 'next/head';

export default function Home() {
  return (
    <div>
      {/* adding SEO using Head component       */}
      <Head>
        <title>WebDev News </title>
        <meta name='keywords' content='web dev, programming, etc'/>
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}
