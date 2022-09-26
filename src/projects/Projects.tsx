import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title";
import todoImages from '../assets/image/todolist.jpg'
import counterImages from '../assets/image/schetchik.jpg'


const Projects = () => {
    const counter = {
        backgroundImage: `url(${counterImages})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImages})`,
    };
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <div className={styles.title}>
                    <Title  textPart1={'my '} textPart2={'projects'}/>
                </div>
                <div className={styles.projects}>
                    <Project
                        style={todolist}
                        title={'TodoList'}
                        description={'Lorem ipsum molestie pellentesque adipiscing, amet nulla amet ipsum bibendum. Massa commodo tellus eros congue sapien, sodales in eros sed maecenas — fusce quisque sem, amet porttitor fusce metus maecenas ligula lectus magna sem. '}
                    />
                    <Project
                        style={counter}
                        title={'Counter'}
                        description={'Lorem ipsum molestie pellentesque adipiscing, amet nulla amet ipsum bibendum. Massa commodo tellus eros congue sapien, sodales in eros sed maecenas.'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;