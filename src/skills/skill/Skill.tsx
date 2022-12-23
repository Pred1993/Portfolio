import React from 'react';
import styles from './Skill.module.scss';

type SkillPropsType = {
  title: string;
  description: string;
  style: any
};
const Skill = ({title, description, style}: SkillPropsType) => {
  return (
    <div className={styles.skill}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.line}>
        <div className={styles.progressLine} style={style}></div>
      </div>
    </div>
  );
};

export default Skill;
