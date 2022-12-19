import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title/Title";
import todoImages from '../assets/image/todolist.jpg'
import cardsImages from '../assets/image/cards.jpg'
import Portfolio from "../common/components/Portfolio/Portfolio";


const Projects = () => {
  const cards = {
    backgroundImage: `url(${cardsImages})`,
  };
  const todolist = {
    backgroundImage: `url(${todoImages})`,
  };
  return (
    <div className={styles.projectsBlock}>
      <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
        <Portfolio/>
        <Title textPart1={'my '} textPart2={'projects'}/>
        <div className={styles.projects}>
          <Project
            style={todolist}
            title={'TodoList'}
            description={'Lorem ipsum molestie pellentesque adipiscing, amet nulla amet ipsum bibendum. Massa commodo tellus eros congue sapien, sodales in eros sed maecenas — fusce quisque sem, amet porttitor fusce metus maecenas ligula lectus magna sem. '}
          />
          <Project
            style={cards}
            title={'Cards'}
            description={'Lorem ipsum molestie pellentesque adipiscing, amet nulla amet ipsum bibendum. Massa commodo tellus eros congue sapien, sodales in eros sed maecenas.'}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;