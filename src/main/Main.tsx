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
            I am a Belarusian who is engaged in front-end development. By the age of 29, this is the very first time I am really enjoying what I am doing!
            <br/>
            I chose front-end to keep my brain toned, invest my soul in interesting projects and enjoy the final result, sitting on the banks of the Neman River, drinking banana yogurt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
