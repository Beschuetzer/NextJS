import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from '../components/Nav';
import Header from '../components/Header';

//NOTE: here the children are each of the .js files in the pages folder
const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Nav/>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
          {children}
        </main>
      </div>
    </React.Fragment>

  );
}

export default Layout;