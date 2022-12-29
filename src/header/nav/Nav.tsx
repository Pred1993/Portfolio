import React, {FC} from 'react';
import styles from './Nav.module.scss';
import {NavObjectType} from "../Header";
import {Link} from "react-scroll";
type NavType = {
  arr: Array<NavObjectType>
  active: boolean
}
const Nav: FC<NavType> = ({arr, active}) => {
  return (
    <ul className={active ? `${styles.common} ${styles.nawAppear}` : `${styles.common} ${styles.nav}`}>
      {arr.map((el, index) => {
        return <li key={index} className={styles.list}>
          <Link activeClass={styles.active}
                to={el.link}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
          >
            {el.name}
          </Link>
        </li>
      })}
    </ul>
  );
};

export default Nav;
