import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2> My projects </h2>
                <div className={styles.projects}>
                    <Project
                    title={'TodoList'}
                    description={'adawdwadawdwadawdwadadwadawdawdawdawdadawd'}
                    />
                    <Project
                    title={'Counter'}
                    description={'awdadwadadadwawawdawddawdwadwadaddawdawdd'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;