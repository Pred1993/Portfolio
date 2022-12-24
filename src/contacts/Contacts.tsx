import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Portfolio from "../common/components/Portfolio/Portfolio";
import Title from "../common/components/Title/Title";

const Contacts = () => {
  return (
    <div className={style.contactsPage}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <Portfolio name={'Contacts'} />
        <Title textPart1={'My '} textPart2={'contacts'} />
        <form className={style.formContainer}>
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" cols={30} rows={10}></textarea>
          <button type="submit" className={style.submitBtn}>
            Send
          </button>
        </form>
        {/*<div className={style.linkContainer}><a href="">send*/}
        {/*</a></div>*/}
      </div>
    </div>
  );
};

export default Contacts;
