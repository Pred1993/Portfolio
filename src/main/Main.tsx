import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span style={{'background': "yellow"}}>HI THERE !</span>
                    <h2 style={{'background': "yellow"}}> I'M IVCHENKO ARTSIOM</h2>
                    <p style={{'background': "yellow"}}> FRONTEND DEVELOPER</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;