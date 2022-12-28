import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Title from "../common/components/Title/Title";
import Portfolio from "../common/components/Portfolio/Portfolio";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";
import {Reveal} from "react-awesome-reveal";
const arrIcons = [faLinkedin, faTelegram, faGithub, faVk]


const Footer = () => {
  return (
    <div className={styles.footerPage}>
      <Portfolio name={'Website'}/>
      <div className={`${styleContainer.container} ${styles.footerContainer}`}>
        <Title textPart1={'Iuchanka '} textPart2={'A.'}/>
        <div className={styles.squareContainer}>
          {arrIcons.map((el, index) => {
            return <Reveal cascade={true}>
              <div className={styles.square} key={index}>
                <FontAwesomeIcon className={styles.icon} icon={el}/>
              </div>
            </Reveal>
          })}
        </div>
        <span className={styles.footerSpan}
        >
          © 2022  All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
