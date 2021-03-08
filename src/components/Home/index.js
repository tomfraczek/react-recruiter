import React from "react";
import styles from './home.module.scss';

function Home() {
  return (
      <div className={styles.home}>
        <h1>Welcome</h1>
        <div className={styles.home__container}>
        <p>This is a recruitment task for the position of Front End Developer.</p>
      </div>

     <div className={styles.home__contact}>
       <h3>Tomasz Fraczek</h3>
       <p>kom: 722 263 641</p>
       <a href="mailto:tomfraczekdev@gmail.com">tomfraczekdev@gmail.com</a>
     </div> 
      </div>
  );
}

export default Home;
