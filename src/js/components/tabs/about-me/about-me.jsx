import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import TabHeader from '../../tab-header';
import SkillBar from '../../skill-bar';

const AboutMe = () => (
  <>
    <TabHeader icon={faUser} />
    <SkillBar percent={80} />
  </>
);

export default AboutMe;
