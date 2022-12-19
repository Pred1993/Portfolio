import React from 'react';
import styles from './Main.module.css'
import photoImages from "../assets/image/photo.png";


const Main = () => {
  const photo = {
    backgroundImage: `url(${photoImages})`,
  };
  return (
      <div className={styles.mainBlock}>
        <div className={styles.figure}></div>
        <div className={styles.mainContainer}>
          <div className={styles.photo} style={photo}></div>
          <div className={styles.text}>
            <h1 className={styles.name}> I'M IVCHENKO ARTSIOM. <span>FRONTEND DEVELOPER</span></h1>
            <p>Lorem ipsum molestie pellentesque adipiscing, amet nulla amet ipsum bibendum. Massa commodo tellus eros
              congue sapien, sodales in eros sed maecenas — fusce quisque sem, amet porttitor fusce metus maecenas
              ligula lectus magna sem. '</p>
          </div>
        </div>
      </div>
  );
};

export default Main;