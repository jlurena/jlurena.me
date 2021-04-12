import React, { useEffect, useState } from 'react';
import styles from './skill-bar.module.scss';

const SkillBar = ({ percent }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [percentNumber, setPercentNumber] = useState(0);
  const intervalId = setInterval(() => setPercentNumber(percentNumber + 1), 100);

  useEffect(() => {
    setBarWidth(percent);
    if (percentNumber >= percent) clearInterval(intervalId);
  }, [percent, percentNumber]);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}><span>Object Oriented Programming</span></div>
        <div className={`${styles.title} ${styles.percent}`}>{`${percentNumber}%`}</div>
      </div>
      <div className={styles.barContainer}>
        <div
          className={styles.fill}
          style={
            {
              width: `${barWidth}%`
            }
          }
        />
      </div>
    </div>
  );
};

export default SkillBar;
