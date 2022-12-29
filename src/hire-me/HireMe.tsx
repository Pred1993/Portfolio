import React from 'react';
import style from './HireMe.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/Title/Title";
import Portfolio from "../common/components/Portfolio/Portfolio";
import SuperButton from "../common/components/SuperButton/SuperButton";
import Link from "../common/components/Link/Link";
import Reveal from "react-awesome-reveal";

const HireMe = () => {
  return (
    <div className={style.hireMeBlock}>
      <Portfolio name={'Freelancer'}/>
      <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
        <Title textPart1={'Available '} textPart2={'for hire'}/>
        <Reveal cascade={true}>
          <SuperButton style={{'marginTop': '20px', 'marginBottom': '20px'}}>
          Download CV
        </SuperButton>
          <Link text={'Here me'} link={''}/>
        </Reveal>
      </div>
    </div>
  );
};

export default HireMe;
