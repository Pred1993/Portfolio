import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';
import Title from '../common/components/Title/Title';
import Portfolio from "../common/components/Portfolio/Portfolio";
import {Reveal} from "react-awesome-reveal";
const skills = {
  'part1': [
    {name: 'JS/TS', progress: '76%'},
    {name: 'HTML', progress: '71%'},
    {name: 'CSS/SCSS/BEM', progress: '74%'},
    {name: 'React/Redux', progress: '72%'},
    {name: 'STORYBOOK', progress: '72%'},
  ],
  'part2': [
    {name: 'GIT/GITHUB', progress: '72%'},
    {name: 'TDD', progress: '75%'},
    {name: 'Axios/Postman', progress: '75%'},
    {name: 'Material-UI', progress: '76%'},
    {name: 'Formik/Yup', progress: '75%'},
  ]
}
const Skills = () => {
  return (
    <div className={styles.skillsBlock} id={'skills'}>
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
