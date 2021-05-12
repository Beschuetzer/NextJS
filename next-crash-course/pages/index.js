import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  console.log('articles =', articles);
  return (
    <div>
      {/* adding SEO using Head component       */}
      <Head>
        <title>WebDev News </title>
        <meta name='keywords' content='web dev, programming, etc'/>
      </Head>
      <ArticleList
        articles={articles}
      />
    </div>
  )
}

//data fetching via methods/functions for passing data as props to pages

//fetch at build time
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles,
    }
  }
}

//fetch at every request 
// export const getServerSideProps = () => {

// }

//dynamically generate pathes based on data being fetched
// export const getStaticPath = () => {

// }
