import React from "react";
import styles from './navigation.module.scss';
import {Link} from 'react-router-dom';
import nav_logo from './img/logo.png';


function Navigation() {
  return (
      <div className={styles.navi}>
          <a href="/"><img className={styles.navi__logo} src={nav_logo} alt="Navigation Logo"/></a>
          <ul className={styles.navi__links}>
              <Link to='/home'>
              <li>Home</li>
              </Link>

              <Link to='/about'>
              <li>About</li>
              </Link>

              <Link to='/factorial'>
              <li>Factorial</li>
              </Link>

              <Link to='/github'>
              <li>Github</li>
              </Link>
          </ul>
      </div>
  );
}

export default Navigation;
