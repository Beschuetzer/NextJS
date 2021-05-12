import Article from './Article';
import styles from '../styles/Article.module.css';

const ArticleList = ({articles}) => {
  return (
    <ul className={styles.grid}>
      {articles.map(article => {
        return (
          <Article
            article={article}
          />
        )
      })}
    </ul>
  );
}

export default ArticleList;