import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import TabHeader from '../../tab-header';
import SkillBar from '../../skill-bar';

const AboutMe = () => (
  <>
    <TabHeader icon={faUser} header="About" headerStrong="Me" />
    <SkillBar percent={80} skillName="Object Oriented Programming" />
  </>
);

export default AboutMe;
