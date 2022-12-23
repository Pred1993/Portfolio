import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';
import Title from '../common/components/Title/Title';
import Portfolio from "../common/components/Portfolio/Portfolio";

const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
        <Portfolio/>
        <Title textPart1={'my '} textPart2={'skills'}/>
        <div className={styles.skills}>
          <div className={styles.part1}>
            <Skill title={'JS/TS'} description={'85%'}/>
            <Skill title={'HTML'} description={'80%'}/>
            <Skill title={'CSS/SCSS/BEM'} description={'84%'}/>
          </div>
          <div className={styles.part2}>
            <Skill title={'GIT/GITHUB'} description={'81%'}/>
            <Skill title={'TDD/STORYBOOK'} description={'75%'}/>
            <Skill title={'React/Redux'} description={'85%'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
