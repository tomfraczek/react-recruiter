import React, {useState} from "react";
import UserCard from '../UserCard'
import styles from "./github.module.scss";
import global from '../../global/global.module.scss';
import DefaultMessage from './DefaultMessage';
import UserContext from '../../context/UserContext'
import DisplayCommitsContext from '../../context/DisplayCommitsContext'


function Github() {

  // STATES
  const [user, setUser] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [requestStatus, setRequestStatus] = useState('');
  const [display, setDisplay] = useState(false);
  const value = {display, setDisplay}

  //SEARCH INPUT HANDLER
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  }

  //SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplay(false);

    const data = await fetch(`https://api.github.com/users/${userInput}`);
    const userData = await data.json();

    setRequestStatus(data.status)
    setUser(userData);
    setUserInput('');
  }


  return (

      <div className={global.content__container}>
          <div className={styles.content__header}>
            <h1>Github</h1>
            <form className={styles.search__form} onSubmit={handleSubmit}>
                <input className={`uk-input ${global.search__input}`} type="text" name='name' placeholder='Search' value={userInput} required onChange={handleSearch} />
                <input className={`btn btn__dark ${global.search__button}`} type="submit" value='Search'/>
            </form> 
          </div>

          <DisplayCommitsContext.Provider value={value}>
            <UserContext.Provider value={user}>
              {user && requestStatus === 200 ? <UserCard /> 
              : requestStatus === 404 ? <p className={styles.not__found__message}>User not found.</p>
              : <DefaultMessage />}
            </UserContext.Provider>
          </DisplayCommitsContext.Provider>
      </div>
  );
}

export default Github;
