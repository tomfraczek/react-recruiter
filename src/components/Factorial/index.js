import React, {useState} from "react";
import styles from './factorial.module.scss';
import global from '../../global/global.module.scss'

function Factorial() {

  //STATES
  const [factorialResult, setFactorialResult] = useState('');
  const [factorialHistory, setFactorialHistory] = useState('');
  const [factorialInput, setFactorialInput] = useState('');

  //SEARCH INPUT HANDLER
  const handleSearch = (e) => {
    setFactorialInput(e.target.value);
  }

  //SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    //GET FACTORIAL
    const getFactorial = (n) => {
      return n ? n * getFactorial(n - 1) : 1
    };

    if (factorialInput < 170 && factorialInput > 0) {
      setFactorialResult([factorialInput, getFactorial(factorialInput)])
      setFactorialHistory(factorialHistory => [...factorialHistory, [factorialInput, getFactorial(factorialInput)]]);
    }
  }

  //GET INTEGER
  const fixedNumber = (x) => {
    return (x).toLocaleString('fullwide', {useGrouping:false})
  }

  return (
      <div className={`${global.content__container} ${styles.factorial}`}>
          <div className={styles.content__header}>
            <h1>Factorial</h1>
            <p className={styles.factorial__description}>In mathematics, the factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n:</p>
            <h2>n!=1⋅2⋅3⋅...⋅(n−1)⋅n</h2>
          </div>

          <div className={global.default__message__container}>
                        <p>Use the form below to calculate the factorial.</p>

            <form className={styles.search__form} onSubmit={handleSubmit}>
                <input className={`uk-input ${global.search__input}`} type="number" name='name' placeholder='n' min='1' max='169' required onChange={handleSearch} />
                <input className={`btn btn__dark ${global.search__button}`} type="submit" value='Calculate'/>
            </form> 
          </div>


          
          <div className="factorial__results">
            
            {factorialResult ? 
              <div className={styles.result__container}>
                <p>Result:</p>
                <p>{factorialResult[0]}! = {fixedNumber(factorialResult[1])}</p>
              </div>
            : null}
            {factorialHistory ? 
              <div className={styles.calc__history}>
                <h2>Previous calculations:</h2>
                <table className="uk-table uk-table-striped">
                  <tbody>
                      {factorialHistory.map(result => <tr>{result[0]}! = {fixedNumber(result[1])}</tr>)}
                  </tbody>
                </table>
              </div> 
            : null}
          </div>
      </div>
  );
}

export default Factorial;
