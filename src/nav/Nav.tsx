import React, {FC} from 'react';
import styles from './Nav.module.scss';
type NavType = {
  arr: string[]
  active: boolean
}
const Nav: FC<NavType> = ({arr, active}) => {
  return (
    <ul className={active ? styles.nawAppear : styles.nav}>
      {arr.map((el, index) => {
        return <li key={index} className={styles.list}>
          <a href="">{el}</a>
        </li>
      })}
    </ul>
  );
};

export default Nav;
