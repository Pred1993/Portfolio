import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>HI THERE !</span>
                    <h2> I'M IVCHENKO ARTSIOM</h2>
                    <p> FRONTEND DEVELOPER</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;