import React from 'react';
import styles from './Project.module.scss';

type ProjectPropsType = {
  title: string;
  description: string;
  style: any;
};
const Project = ({ title, description, style }: ProjectPropsType) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer} style={style}>
        <a className={styles.viewButton} href="">
          Look
        </a>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
};

export default Project;
