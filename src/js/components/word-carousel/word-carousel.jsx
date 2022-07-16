import React from 'react';
import PropTypes from 'prop-types';
import styles from './word-carousel.module.scss';

function WordCarousel({ words }) {
  return (
    <>
      {words.map(w => <span className={styles.word} key={w}>{w}</span>)}
    </>
  );
}

WordCarousel.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WordCarousel;
