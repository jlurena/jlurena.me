import React from 'react';
import styles from './word-carousel.module.scss';

const WordCarousel = ({ words }) => (
  <>
    {words.map(w => <span className={styles.word} key={w}>{w}</span>)}
  </>
);

export default WordCarousel;
