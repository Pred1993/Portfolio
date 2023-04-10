import React from 'react';
import styles from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Project from './Project/Project';
import Title from '../common/components/Title/Title';
import todoImages from '../assets/image/todolist.jpg';
import cardsImages from '../assets/image/cards.jpg';
import libraryImages from '../assets/image/library.jpg';
import Portfolio from '../common/components/Portfolio/Portfolio';

const Projects = () => {
  const cards = {
    backgroundImage: `url(${cardsImages})`,
  };
  const todolist = {
    backgroundImage: `url(${todoImages})`,
  };
  const cleverTec = {
    backgroundImage: `url(${libraryImages})`,
  };

  return (
    <div className={styles.projectsBlock} id={'projects'}>
      <Portfolio name={'Portfolio'}/>
      <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
        <Title textPart1={'my '} textPart2={'projects'}/>
        <div className={styles.projects}>
          <Project
            link={'https://pred1993.github.io/clever-tec/'}
            link2={'https://github.com/Pred1993/clever-tec'}
            style={cleverTec}
            title={'Clever-tec'}
            description={
              'In this project, an online library was implemented with the ability to book, view the history of read books, leave reviews and evaluations. For the convenience of the user basic front-end development tasks are used: authorization, sorting by ratting, search by name, modals, requests to the server, etc.'
            }
          />
          <Project
            link={'https://pred1993.github.io/TodoList/#/login'}
            link2={'https://github.com/Pred1993/TodoList'}
            style={todolist}
            title={'TodoList'}
            description={
              'A project in which you can form your list of affairs, by categories, mark completed and sort. Here is implemented the main mechanism of CRUD operations (in the process of writing).'
            }
          />
          <Project
            link={'https://vlad-remnev.github.io/fridaytemp/#/login'}
            link2={'https://github.com/Vlad-Remnev/fridaytemp'}
            style={cards}
            title={'Cards'}
            description={
              'In this project you can create your own card sets in question - answer format and study any material on them (in the process of writing). For the convenience of the user basic front-end development tasks are used: authorization, sorting by creation date, search by name, search by quantity (double range slider), pagination, debounce, modals, etc.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
