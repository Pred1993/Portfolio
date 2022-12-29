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
          <a href={'https://drive.google.com/file/d/1YOp2fSwjcqrEhZmB2Samx7d2V_Ybb_16/view?usp=share_link'}>
            <SuperButton style={{'marginTop': '20px', 'marginBottom': '20px'}}>
            Download CV
          </SuperButton></a>
          <Link text={'Here me'} link={''}/>
        </Reveal>
      </div>
    </div>
  );
};

export default HireMe;
