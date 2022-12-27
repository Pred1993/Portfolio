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
const arrIcons = [faLinkedin, faTelegram, faGithub, faVk]


const Footer = () => {
  return (
    <div className={styles.footerPage}>
      <Portfolio name={'Website'}/>
      <div className={`${styleContainer.container} ${styles.footerContainer}`}>
        <Title textPart1={'Iuchanka '} textPart2={'A.'}/>
        <div className={styles.squareContainer}>
          {arrIcons.map((el, index) => {
            return <div className={styles.square}>
              <FontAwesomeIcon className={styles.icon} icon={el} />
            </div>
          })}
        </div>
        <span
          style={{
            paddingTop: '20px',
          }}
        >
          © 2022 Все права защищены
        </span>
      </div>
    </div>
  );
};

export default Footer;