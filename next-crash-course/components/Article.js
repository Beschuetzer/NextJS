import styles from '../styles/Article.module.css';
import Link from 'next/link';

const Article = ({article}) => {
  return (
    // Using the Link component supplied by NextJS to create routes for each Article (must have proper folder structure setup for this to work otherwise errors;  create a folder called 'article' in '/pages' that has folder called '[id]' inside, which has an 'index.js' in it)
    <Link
      href="/article/[id]" as={`/article/${article.id}`}
    >
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}

export default Article;