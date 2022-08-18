import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}
const Project = ({title, description}: ProjectPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.img}>
                <a href="">See
                </a>
            </div>
            <h3>{title}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
};

export default Project;