import React from 'react'
import styles from './word-carousel.module.scss'

interface WordCarouselProps {
  words: string[]
}

const WordCarousel: React.FC<WordCarouselProps> = ({ words }) => {
  return (
    <>
      {words.map(w => (
        <span className={styles.word} key={w}>{w}</span>
      ))}
    </>
  )
}

export default WordCarousel
