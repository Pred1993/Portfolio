import React from 'react';
import style from './Title.module.css'
type TitlePropsType = {
    textPart1: string
    textPart2: string
}
const Title = ({textPart1, textPart2}:TitlePropsType ) => {
    return (
        <div className={style.title}>
            <h2>{textPart1}<span className={style.span}>{textPart2}</span></h2>
        </div>
    );
};

export default Title;