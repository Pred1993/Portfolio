import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';
import Title from '../common/components/Title/Title';
import Portfolio from "../common/components/Portfolio/Portfolio";
import {Reveal} from "react-awesome-reveal";
const skills = {
  'part1': [
    {name: 'JS/TS', progress: '85%'},
    {name: 'HTML', progress: '80%'},
    {name: 'CSS/SCSS/BEM', progress: '84%'},
    {name: 'React/Redux', progress: '81%'},
  ],
  'part2': [
    {name: 'GIT/GITHUB', progress: '75%'},
    {name: 'TDD/STORYBOOK', progress: '85%'},
    {name: 'Axios/Postman', progress: '83%'},
    {name: 'Material-UI/Formik', progress: '85%'},
  ]
}
const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <Portfolio name={'Ability'}/>
      <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
        <Title textPart1={'my '} textPart2={'skills'}/>
        <div className={styles.skills}>
          <div className={styles.part1}>
            {skills.part1.map((el, index) => {
              const progressStyle = {
                width: el.progress,
              };
              return <Reveal cascade={true}><Skill key={index} title={el.name} description={el.progress} style={progressStyle}/></Reveal>
            })}
          </div>
          <div className={styles.part2}>
            {skills.part2.map((el, index) => {
              const progressStyle = {
                width: el.progress,
              };
              return <Reveal cascade={true}><Skill key={index} title={el.name} description={el.progress} style={progressStyle}/></Reveal>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
