import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsPage}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 style={{'background': "yellow"}}>My contacts</h2>
                <form className={style.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                    <button type='submit' className={style.submitBtn}>Send</button>
                </form>
                {/*<div className={style.linkContainer}><a href="">send*/}
                {/*</a></div>*/}
            </div>
        </div>
    );
};

export default Contacts;