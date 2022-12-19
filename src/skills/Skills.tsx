import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/Title/Title";

const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
        <Title textPart1={'my '} textPart2={'skills'}/>
        <div className={styles.skills}>
          <Skill
            title={'JS'}
            description={'somdawdawdawdawdawdawddawdwadaw dawdawawdawddwadawdawdawaething'}
          />
          <Skill
            title={'CSS'}
            description={'something awdawdawdawdadawdadawd awdawdawwdadawdwddawdawdawd'}
          />
          <Skill
            title={'HTML'}
            description={'somdwadawddwadwdawdawdadadwadwad wadawdwdawadawdwadawdwadaething'}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;