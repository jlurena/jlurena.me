import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from '../scss/home.module.scss';
import '../scss/antispam.scss';

import WordCarousel from './components/word-carousel';

const Home: React.FC = () => {
  const words = ['Leader', 'Software Engineer', 'Student', 'Car Enthusiast', 'Hiker', 'Coffee Fanatic'];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.picture} />
        <div className={styles.content}>
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
          <div className={styles.center}>
            <a className="reverse" href="mailto:eljean@live.com?subject=&body=">
              moc.evil
              <span />
              naejle
            </a>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
