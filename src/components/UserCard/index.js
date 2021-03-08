import React, {useState, useEffect, useContext} from "react";
import '../../utility/uikit/css/uikit.min.css';
import styles from './usercard.module.scss'
import Repositories from '../Repositories'
import UserContext from '../../context/UserContext';


function UserCard() {

  // CONST
  const [repos, setRepos] = useState([]);
  const user = useContext(UserContext);

  
    useEffect(() => {
      // FETCH THE REPOSIETORIES DATA    
      async function fetchData() {
          const data = await fetch(`${user.repos_url}?per_page=5&sort=updated`);
          const repos = await data.json();
      
          setRepos(repos);
        }

        fetchData();
    }, [user])      

  return (
      <div className={styles.user__container}>
          <div className={styles.user__container__left}>
            <img className={styles.user__avatar} src={user.avatar_url} alt="User avatar"/>
              <div className={styles.user__details}>
                
                <div className={styles.user__names}>
                  <h2>{user.name}</h2>
                  <p>{user.login}</p>
                  <p>{user.bio}</p>
                  <p>{user.location}</p>
                  <a href={user.blog}>{user.blog}</a>
                </div>

            </div>            
          </div>
        {repos ? 
          <div>
            {repos.length ? <Repositories repos={repos} /> : <p className={styles.noRepos__message}>No repositories found</p>}
            
          </div>
        : null}
          

      </div>
  );
}

export default UserCard;
