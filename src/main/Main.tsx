import React from 'react';
import styles from './Main.module.scss';
import photoImages from '../assets/image/photoFinish.png';
import {ParticleBackground} from "../ParticleBackground/ParticleBackground";



const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <ParticleBackground/>
      <div className={styles.mainContainer}>
        <div className={styles.figure}></div>
        <div>
          <img className={styles.photo} src={photoImages} alt="Main photo"/>
        </div>
        <div className={styles.text}>
          <h1 className={styles.name}>
            {' '}
            I'M IUCHANKA ARTSIOM. <span>FRONTEND DEVELOPER</span>
          </h1>
          <p className={styles.textDescription}>
            Lorem ipsum molestie pellentesque adipiscing, amet nulla amet ipsum bibendum. Massa commodo tellus eros
            congue sapien, sodales in eros sed maecenas — fusce quisque sem, amet porttitor fusce metus maecenas ligula
            lectus magna sem. '
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
