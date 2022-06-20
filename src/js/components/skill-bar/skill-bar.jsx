import React, { useEffect, useState } from 'react';
import styles from './skill-bar.module.scss';

const SkillBar = ({ skillName, percent }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [percentNumber, setPercentNumber] = useState(0);
  const [isAnimationDelayed, setAnimationIsDelayed] = useState(true);

  setTimeout(() => {
    setAnimationIsDelayed(false);
  }, 300);

  useEffect(() => {
    if (!isAnimationDelayed) {
      setTimeout(() => (percentNumber < percent ? setPercentNumber(percentNumber + 1) : null), 1000 / percent);
    }
  }, [isAnimationDelayed, percentNumber]);

  useEffect(() => {
    setBarWidth(percent);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}><span>{skillName}</span></div>
        <div className={`${styles.title} ${styles.percent}`}>{`${percentNumber}%`}</div>
      </div>
      <div className={styles.barContainer}>
        <div
          className={styles.fill}
          style={
            {
              width: `${barWidth}%`,
            }
          }
        />
      </div>
    </div>
  );
};

export default SkillBar;
