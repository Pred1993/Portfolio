import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 style={{'background': "yellow"}}>My skills</h2>
                <div className={styles.skills}>
                    <Skill
                        title={'JS'}
                        description={'somdawdawdawdawdawdawddawdwadaw dawdawawdawddwadawdawdawaething'}
                    />
                    <Skill
                        title={'CSS'}
                        description={'something awdawdawdawdadawdadawd awdawdawwdadawdwddawdawdawd'}
                    />
                    <Skill
                        title={'HTML'}
                        description={'somdwadawddwadwdawdawdadadwadwad wadawdwdawadawdwadawdwadaething'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;