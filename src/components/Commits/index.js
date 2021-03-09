import React, {useContext} from "react";
import styles from './commits.module.scss';
import {formatDate} from '../../utility';
import arrowImmage from './img/right-arrow.svg';
import DisplayCommitsContext from '../../context/DisplayCommitsContext';

function Commits({commits, hidden}) {
  const {display, setDisplay} = useContext(DisplayCommitsContext);

  const clickHandler = () =>{
    setDisplay(false);
  }

  return (
      <div className={`${styles.commits__container} ${display ? styles.show__commits : ''}`}>
        <img src={arrowImmage} className={styles.arrow__image} onClick={clickHandler} alt=""/>
        <table className="uk-table uk-table-striped">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
          {commits.map(commit => (
            <tr key={commit.node_id}>
              <td>{commit.commit.message}</td>
              <td>{commit.commit.author.name}</td>
              <td>{formatDate(commit.commit.author.date)}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default Commits;


