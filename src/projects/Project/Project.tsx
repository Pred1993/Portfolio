import React from 'react';
import styles from './Project.module.scss';
import {Fade} from "react-awesome-reveal";
import styleLink from '../../common/components/LinkComponent/LinkComponent.module.scss';

type ProjectPropsType = {
  title: string;
  description: string;
  style: any;
  link: string
  link2: string
};
const Project = ({ title, description, style, link, link2 }: ProjectPropsType) => {
  return (
    <Fade delay={300}>
      <div className={styles.project}>
        <div className={styles.imgContainer} style={style}>
          <a rel="noreferrer" className={styleLink.link} href={link} target='_blank'>
            Look
          </a>
        </div>
        <div className={styles.projectInfo}>
          <a href={link2} className={styles.projectTitle}>{title}</a>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
