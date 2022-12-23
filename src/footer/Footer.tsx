import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.scss';

const Footer = () => {
  return (
    <div className={style.footerPage}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 style={{ background: 'yellow' }}>Artem Ivchenko</h2>
        <div className={style.squareContainer}>
          <div className={style.square}></div>
          <div className={style.square}></div>
          <div className={style.square}></div>
          <div className={style.square}></div>
        </div>
        <span
          style={{
            paddingTop: '20px',
          }}
        >
          © 2022 Все права защищены
        </span>
      </div>
    </div>
  );
};

export default Footer;
