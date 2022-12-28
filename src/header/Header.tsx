import React, {useState} from 'react';
import styles from './Header.module.scss';
import Nav from '../nav/Nav';
const arrNav = ['Main', 'Skills', 'Projects', 'Contacts']
const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.header}>
      <div onClick={() => setActive(!active)} className={active ? `${styles.common} ${styles.cross}` : `${styles.common} ${styles.hamburger}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Nav arr={arrNav} active={active}/>
    </div>
  );
};

export default Header;
