import React from "react";
import styles from './about.module.scss'

function About() {
  return (
      <div className={styles.about__container}>
          <h1>About</h1>
          <div className={styles.about__description}>
          <p>Napisz aplikację korzystając z najnowszego api react.js (hooki, Context, itd.) spełniającą poniższe założenia.</p>
          <p>Aplikacja ma się składać z minimum 3 ekranów:</p>

          <ol>
            <li>Wyszukiwarka projektów githubowych</li>
            <li>Założenia całej aplikacji</li>
            <li>Wyliczanie silni</li>
          </ol>


          <p>Ad 1:</p>
          <ul>
            <li>Wykorzystane jest publiczne API Githuba;
              <ul>
                <li>Czeka na podanie loginu użytkownika;</li>
                <li>Waliduje poprawność;</li>
                <li>Obsługuje nieistniejące loginy;</li>
              </ul>
            </li>
            <li>Wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego;</li>
            <li>Wyświetla maksymalnie 5 commitów każdego z projektów;</li>
          </ul>

          <p>Ad 2:</p>
          <ul>
            <li>Wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem;</li>
            <li>Proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
          </ul>

          <p>Ad 3:</p>
          <ul>
            <li>Input do podania liczby dla której będzie wyliczona silnia;</li>
            <li>Historia poprzednich wyliczeń;</li>
          </ul>

          <p>Ogólne:</p>
          <ul>
            <li>Korzysta z LESS / SASS. Spełnia wymogi BEM. Jest też estetyczna;</li>
            <li>Wyświetla co drugi element każdej listy wyróżnionym kolorem;</li>
            <li>Jest hostowana (github pages, heroku, itd..), a jej kod jest dostępny publicznie;</li>
            <li>Miło widziane użycie middlewarów reduxowych;</li>
          </ul>
          </div>
      </div>
  );
}

export default About;
