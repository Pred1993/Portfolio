import React from 'react';
import styles from './Project.module.scss';
import Link from "../../common/components/Link/Link";
import {Fade} from "react-awesome-reveal";


type ProjectPropsType = {
  title: string;
  description: string;
  style: any;
};
const Project = ({ title, description, style }: ProjectPropsType) => {
  return (
    <Fade delay={300}>
      <div className={styles.project}>
        <div className={styles.imgContainer} style={style}>
          <Link text={'Look'}/>
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
