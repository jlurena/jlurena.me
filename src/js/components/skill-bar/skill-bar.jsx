import React, { useEffect, useState } from 'react';
import styles from './skill-bar.module.scss';

const SkillBar = ({ percent }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => setBarWidth(percent), [percent]);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}><span>Object Oriented Programming</span></div>
        <div class={`${styles.title} ${styles.percent}`}>{`${percent}%`}</div>
      </div>
      <div className={styles.barContainer}>
        <div 
          className={styles.fill} 
          style={
            {
              width: `${barWidth}%`
            }
          }/>
      </div>
    </div>
  );
}

export default SkillBar;
