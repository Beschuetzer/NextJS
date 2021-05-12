import Meta from '../components/Meta';
import ArticleList from '../components/ArticleList';
import { server} from '../config';

export default function Home({articles}) {
  console.log('articles =', articles);
  return (
    <div>
      {/* adding SEO using Head component       */}
      <Meta/>
      <ArticleList
        articles={articles}
      />
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    }
  }
}


//data fetching via methods/functions for passing data as props to pages

//fetch at build time
// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     }
//   }
// }

//fetch at every request 
// export const getServerSideProps = () => {

// }

//dynamically generate pathes based on data being fetched
// export const getStaticPath = () => {

// }
