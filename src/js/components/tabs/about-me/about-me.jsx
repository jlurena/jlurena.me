import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../../header';
import SkillBar from '../../skill-bar';
import styles from './about-me.module.scss';

const AboutMe = () => (
  <div className={styles.container}>
    <Header icon={faUser} headerText="ABOUT" headerStrongText="ME" fontSize="1.5rem" />
    <div className={styles.summaryContainer}>
      <div className={styles.contactContainer}>
        <Header headerLevel="2" headerText="HEY! NICE TO MEET YOU, I'M" headerStrongText="JEAN" fontSize="18px" />
      </div>
      <div className={styles.skillsContainer}>
        <Header headerLevel="2" headerText="MY" headerStrongText="SKILLS" fontSize="18px" />
        <SkillBar percent={80} skillName="Object Oriented Programming" />
      </div>

    </div>

  </div>
);

export default AboutMe;
