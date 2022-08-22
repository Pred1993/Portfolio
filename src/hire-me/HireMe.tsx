import React from 'react';
import style from './HireMe.module.css'
import styleContainer from "../common/styles/Container.module.css";

const HireMe = () => {
    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <h2 style={{'background': "yellow"}}>Рассматриваю варианты удалённой работы</h2>
                <div className={style.linkContainer}><a href="">Нанять меня</a></div>
            </div>
        </div>
    );
};

export default HireMe;