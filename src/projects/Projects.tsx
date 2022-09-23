import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <Title textPart1={'my '} textPart2={'projects'}/>
                </div>
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