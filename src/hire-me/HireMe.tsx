import React from 'react';
import style from './HireMe.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/Title/Title";
import Portfolio from "../common/components/Portfolio/Portfolio";
import SuperButton from "../common/components/SuperButton/SuperButton";
import Link from "../common/components/Link/Link";
import Reveal from "react-awesome-reveal";
import axios from "axios";

const HireMe = () => {
  // const getAvatar = () => {
  //   axios.get('https://neko-back.herokuapp.com/file', {responseType: 'blob'})
  //     .then((res) => {
  //       const blob = new Blob([res.data], {type : 'image/jpeg'});
  //
  //       // создать ссылку на файл
  //       const downloadUrl = window.URL.createObjectURL(blob);
  //
  //       // создать тег "ссылка" на наш файл
  //       const link = document.createElement('a');
  //       link.href = downloadUrl;
  //
  //       // добавить атрибуты нашему тегу: загрузочный, имя файла
  //       link.setAttribute('download', 'newFile.jpg');
  //
  //       // добавить тег в документ
  //       document.body.appendChild(link);
  //
  //       // нажать на ссылку
  //       link.click();
  //
  //       // удалить тег из документа
  //       link.remove();
  //     })
  // }
  return (
    <div className={style.hireMeBlock}>
      <Portfolio name={'Freelancer'}/>
      <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
        <Title textPart1={'Available '} textPart2={'for hire'}/>
        <Reveal cascade={true}>
          <a href='src/assets/resume/Resume Artsiom Iuchanka (5).pdf'
          download>
            <SuperButton style={{'marginTop': '20px', 'marginBottom': '20px'}}>
            Download CV
          </SuperButton>
        </a>
          <Link text={'Here me'} link={''}/>
        </Reveal>
      </div>
    </div>
  );
};

export default HireMe;
