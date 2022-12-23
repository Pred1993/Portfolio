import React from 'react';
import style from './HireMe.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/Title/Title";
import Portfolio from "../common/components/Portfolio/Portfolio";
import SuperButton from "../common/components/SuperButton/SuperButton";

const HireMe = () => {
  return (
    <div className={style.hireMeBlock}>
      <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
        <Portfolio name={'Freelancer'}/>
        <Title textPart1={'Available '} textPart2={'for hire'}/>
        <SuperButton>
          Download CV
        </SuperButton>
        <div className={style.linkContainer}>
          <a href="">HIRE ME</a>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
