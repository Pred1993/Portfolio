import React, {FC} from 'react';
import styles from './Nav.module.scss';
import {NavObjectType} from "../Header";
type NavType = {
  arr: Array<NavObjectType>
  active: boolean
}
const Nav: FC<NavType> = ({arr, active}) => {
  return (
    <ul className={active ? `${styles.common} ${styles.nawAppear}` : `${styles.common} ${styles.nav}`}>
      {arr.map((el, index) => {
        return <li key={index} className={styles.list}>
          <a href={el.link}>{el.name}</a>
        </li>
      })}
    </ul>
  );
};

export default Nav;
