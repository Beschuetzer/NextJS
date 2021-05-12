import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev </span> News
      </h1>
      <p className={styles.description}>Keep up to date with the last news</p>
      {/* //NOTE: this is how to do styled inline-components */}
      {/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}
    </div>
  );
}

export default Header;