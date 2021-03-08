import React from "react";
import githubLogo from './img/github.svg';
import styles from "./github.module.scss";
import global from '../../global/global.module.scss'

function DefaultMessage() {
  return (
    <div className={global.default__message__container}>
      <img className={styles.github__logo} src={githubLogo} alt='Github Logo' />  

      <p>Please use the form above to search for a Github user</p>
  </div>
  );
}

export default DefaultMessage;
