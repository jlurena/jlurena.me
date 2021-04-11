import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './home.module.scss';
import JeanPic from '../../../../images/jean/webslidepic1.jpg';

import WordCarousel from '../../word-carousel/word-carousel';

const Home = () => {
  const words = ['Leader', 'Software Engineer', 'Student', 'Car Enthusiast', 'Hiker', 'Coffee Fanatic'];
  const imageAlt = 'Picture of Jean Luis Urena';
  return (
    <div className={styles.content}>
      <img
        src={JeanPic}
        className={styles.picture}
        alt={imageAlt}
        width="200"
        height="200"
      />
      <div className={`${styles.introduction} ${styles.center}`}>
        <h1>Hello, my name is</h1>
        <h1><b>Jean Luis Urena</b></h1>
      </div>

      <div className={styles.wordsCarousel}>
        I am a
        <div>
          <WordCarousel words={words} />
        </div>
      </div>
      <div className={styles.contact}>
        <a className="reverse" href="mailto:eljean@live.com?subject=&body=">
          moc.evil@
          <span />
          naejle
        </a>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
};

export default Home;
