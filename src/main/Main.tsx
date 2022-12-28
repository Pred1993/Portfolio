import React from 'react';
import styles from './Main.module.scss';
import photoImages from '../assets/image/photoFinish.png';
import {ParticleBackground} from "../ParticleBackground/ParticleBackground";
import Typewriter from 'typewriter-effect'

const Main = () => {
  return (
    <div className={styles.mainBlock} id={'main'}>
      <ParticleBackground/>
      <div className={styles.mainContainer}>
        <div className={styles.figure}></div>
        <div>
          <img className={styles.photo} src={photoImages} alt="Main photo"/>
        </div>
        <div className={styles.text}>
          <h1 className={styles.name}>
            I'M IUCHANKA ARTSIOM.
            <span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Here we go!')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('FRONTEND DEVELOPER')
                    .start()

                }}
                // options={{
                //   strings: 'FRONTEND DEVELOPER',
                //   autoStart: true,
                //   loop: true,
                // }}
              />
            </span>
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
