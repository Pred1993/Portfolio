import React from 'react';
import style from './HireMe.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/Title/Title";
import Portfolio from "../common/components/Portfolio/Portfolio";
import LinkComponent from "../common/components/LinkComponent/LinkComponent";
import Reveal from "react-awesome-reveal";
import SuperButton from "../common/components/SuperButton/SuperButton";

const HireMe = () => {
  return (
    <div className={style.hireMeBlock}>
      <Portfolio name={'Position'}/>
      <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
        <Title textPart1={'Available '} textPart2={'for hire'}/>
        <Reveal cascade={true}>
            <a href='https://drive.google.com/file/d/1YOp2fSwjcqrEhZmB2Samx7d2V_Ybb_16/view?usp=share_link' target='_blank'
            >
              <SuperButton style={{'marginTop': '20px', 'marginBottom': '20px'}}>
              Download CV
            </SuperButton>
          </a>
          <LinkComponent text={'Here me'} link={'contact'}/>
        </Reveal>
      </div>
    </div>
  );
};

export default HireMe;
