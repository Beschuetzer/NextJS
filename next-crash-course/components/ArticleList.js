import Article from './Article';
import styles from '../styles/Article.module.css';

const ArticleList = ({articles}) => {
  return (
    <ul className={styles.grid}>
      {articles.map((article, index) => {
        return (
          <Article
            key={index} 
            article={article}
          />
        )
      })}
    </ul>
  );
}

export default ArticleList;