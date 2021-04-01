import React from 'react';
import Backdrop from '../../backdrop';
import SkillBar from '../../skill-bar'

const AboutMe = () => {
  return (
    <Backdrop>
      <SkillBar percent={80}/>
    </Backdrop>
  );
};

export default AboutMe;
