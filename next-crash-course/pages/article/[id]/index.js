import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '../../../config';
import Meta from '../../../components/Meta';


const article = ({article}) => {
  //NOTE: useRouter() is used to access the query params
  // const router = useRouter();
  // console.log('router =', router);
  // const { id } = router.query;

  return (
    <div>
      <Meta 
        title={article.title}
        description={article.excerpt}
      />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br/>
      <Link href="/">Go Back</Link>
    </div>
  );
}

export default article;

export const getStaticPaths = async () => {
  //NOTE: Getting all of the posts/articles at build time (initial page load?) and dynamically create paths based on that data
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();
  console.log('articles =', articles);
  const ids = articles.map((article) => article.id);
  console.log('ids =', ids);
  const paths = ids.map(id => ({params: {id: id.toString()}}))
  console.log('paths =', paths);
  //NOTE: paths looks like this:
  // {
  //  [
  //    {params: {id: 1}} ,
  //    {params: {id: 2}} ,
  //    {params: {id: ...}} ,
  // }

  return {
    paths,

    //NOTE: if we go to something that doesn't exist, return 404
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    }
  }
}


//NOTE: this fetches the data whenever going to the page (rather than getting on load and storing); you can also use the combination of getStaticProps and getStaticPathes to dynamically generate pathes with data
// export const getServerSideProps = async (context) => {
//   console.log('context =', context);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   //NOTE: Getting all of the posts/articles at build time (initial page load?) and dynamically create paths based on that data
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await res.json();
//   console.log('articles =', articles);
//   const ids = articles.map((article) => article.id);
//   console.log('ids =', ids);
//   const paths = ids.map(id => ({params: {id: id.toString()}}))
//   console.log('paths =', paths);
//   //NOTE: paths looks like this:
//   // {
//   //  [
//   //    {params: {id: 1}} ,
//   //    {params: {id: 2}} ,
//   //    {params: {id: ...}} ,
//   // }

//   return {
//     paths,

//     //NOTE: if we go to something that doesn't exist, return 404
//     fallback: false,
//   }
// }

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     }
//   }
// }