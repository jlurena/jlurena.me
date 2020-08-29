import React from 'react';
import styles from '../../scss/word-carousel.module.scss';

type WordCarouselProps = {
  words: Array<string>
};

const WordCarousel: React.FC<WordCarouselProps> = ({ words }) => (
  <>
    {words.map(w => <span className={styles.word} key={w}>{w}</span>)}
  </>
);

export default WordCarousel;
