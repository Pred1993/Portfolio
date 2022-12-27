import React from 'react';
import style from './HireMe.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/Title/Title";
import Portfolio from "../common/components/Portfolio/Portfolio";
import SuperButton from "../common/components/SuperButton/SuperButton";
import Link from "../common/components/Link/Link";

const HireMe = () => {
  return (
    <div className={style.hireMeBlock}>
      <Portfolio name={'Freelancer'}/>
      <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
        <Title textPart1={'Available '} textPart2={'for hire'}/>
        <SuperButton style={{'marginTop': '20px', 'marginBottom': '20px'}}>
          Download CV
        </SuperButton>
        <Link text={'Here me'}/>
      </div>
    </div>
  );
};

export default HireMe;
