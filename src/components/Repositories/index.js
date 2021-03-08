import React, { useState, useContext } from "react";
import styles from './Repositories.module.scss'
import Commits from '../Commits'
import { Octokit } from "@octokit/core";
import UserContext from '../../context/UserContext';
import DisplayCommitsContext from '../../context/DisplayCommitsContext';
import {formatDate} from '../../utility'

function Repositories({repos}) {

    //STATES
    const [commits, setCommits] = useState('');
    const {display, setDisplay} = useContext(DisplayCommitsContext);
    const user = useContext(UserContext);
    const octokit = new Octokit();

    //CLICK-COMMIT HANDLER
    const commitsHandler = (e) => {
      e.preventDefault();

      for (let i = 0; i < repos.length; i++) {
        async function fetchCommits () {
          const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: user.login,
            repo: e.target.dataset.repo,
            per_page: 5
          })

          setCommits(response.data);
        }
  
        fetchCommits();
      }

      setDisplay(true);
    }

        

  return (
    <div className={styles.content__container}>

      <div className={`${styles.repo__container} ${display ? styles.repos__hidden : ''}`}>
       <table className="uk-table uk-table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th className={styles.table__lng}>Language</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>Commits</th>
            </tr>
        </thead>
        <tbody>
          {repos.map(repo => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td className={styles.table__lng}>{repo.language}</td>
              <td>{formatDate(repo.created_at)}</td>
              <td>{formatDate(repo.updated_at)}</td>
              <td><a href='/' data-repo={repo.name} onClick={commitsHandler}>Show commits</a></td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>

      {commits ? 
      <Commits hidden={display ? true  : false} commits={commits} />
      : null}
    
</div>
  );
}

export default Repositories;
