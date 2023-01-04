import React from 'react';
import styles from './Project.module.scss';
import LinkComponent from "../../common/components/LinkComponent/LinkComponent";
import {Fade} from "react-awesome-reveal";


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
          <LinkComponent text={'Look'} link={link}/>
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
