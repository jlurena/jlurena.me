import React from 'react'
import styles from './word-carousel.module.scss'

function WordCarousel ({ words }) {
  return (
    <>
      {words.map(w => <span className={styles.word} key={w}>{w}</span>)}
    </>
  )
}
export default WordCarousel
