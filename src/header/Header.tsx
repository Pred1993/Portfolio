import React from 'react';
import style from './Header.module.scss';
import Nav from '../nav/Nav';
const arrNav = ['Main', 'Skills', 'Projects', 'Contacts']
const Header = () => {
  return (
    <div className={style.header}>
      <Nav arr={arrNav}/>
    </div>
  );
};

export default Header;
