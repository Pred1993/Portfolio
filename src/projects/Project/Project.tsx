import React from 'react';
import styles from './Project.module.scss';
import {Fade} from "react-awesome-reveal";
import styleLink from '../../common/components/LinkComponent/LinkComponent.module.scss';

type ProjectPropsType = {
  title: string;
  description: string;
  style: any;
  link: string
};
const Project = ({ title, description, style, link }: ProjectPropsType) => {
  return (
    <Fade delay={300}>
      <div className={styles.project}>
        <div className={styles.imgContainer} style={style}>
          <a className={styleLink.link} href={link} target='_blank'>
            Look
          </a>
        </div>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
