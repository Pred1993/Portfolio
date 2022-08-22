import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 style={{'background': "yellow"}}> My projects </h2>
                <div className={style.projects}>
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