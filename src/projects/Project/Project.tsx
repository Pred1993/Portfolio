import React from 'react';
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}
const Project = ({title, description}: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href="">See
                </a>
            </div>
            <h3 style={{'background': "yellow"}}>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};

export default Project;