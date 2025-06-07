import React, { useEffect, useState } from 'react'
import styles from './skill-bar.module.scss'

interface SkillBarProps {
  skillName: string
  percent: number
}

const SkillBar: React.FC<SkillBarProps> = ({ skillName, percent }) => {
  const [barWidth, setBarWidth] = useState<number>(0)
  const [percentNumber, setPercentNumber] = useState<number>(0)
  const [isAnimationDelayed, setAnimationIsDelayed] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationIsDelayed(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAnimationDelayed) {
      if (percentNumber < percent) {
        const timer = setTimeout(() => setPercentNumber(percentNumber + 1), 1000 / percent)
        return () => clearTimeout(timer)
      }
    }
  }, [isAnimationDelayed, percentNumber, percent])

  useEffect(() => {
    setBarWidth(percent)
  }, [percent])

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}><span>{skillName}</span></div>
        <div className={`${styles.title} ${styles.percent}`}>{`${percentNumber}%`}</div>
      </div>
      <div className={styles.barContainer}>
        <div
          className={styles.fill}
          style={{
            width: `${barWidth}%`
          }}
        />
      </div>
    </div>
  )
}

export default SkillBar
