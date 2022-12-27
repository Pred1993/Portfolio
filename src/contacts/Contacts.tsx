import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Portfolio from "../common/components/Portfolio/Portfolio";
import Title from "../common/components/Title/Title";
import SuperButton from "../common/components/SuperButton/SuperButton";
import {useFormik} from "formik";
import * as Yup from 'yup';
import SuperInput from "../common/components/SuperInput/SuperInput";

const Contacts = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  });
  return (
    <div className={styles.contactsPage}>
      <Portfolio name={'Contacts'}/>
      <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
        <Title textPart1={'My '} textPart2={'contacts'}/>
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
          <SuperInput className={styles.name} placeholder={'Name'}
                      {...formik.getFieldProps('name')}
          />
          {/*{formik.touched.email && formik.errors.email && (*/}
          {/*  <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>*/}
          {/*)}*/}
          <SuperInput className={styles.email} placeholder={'e-mail'}
                      {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{color: 'red', fontSize: '12px'}}>{formik.errors.email}</div>
          )}
          <textarea className={styles.message} placeholder={'Message'}
                    {...formik.getFieldProps('message')}
          />
          {/*{formik.touched.email && formik.errors.email && (*/}
          {/*  <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</div>*/}
          {/*)}*/}
          <div className={styles.submitBtn} >
            <SuperButton style={{'width': '150px'}}
                         type="submit"
            >
              Sign In
            </SuperButton>
          </div>
        </form>
        {/*<form className={style.formContainer}>*/}
        {/*  <input type="text" />*/}
        {/*  <input type="text" />*/}
        {/*  <textarea name="" id="" cols={30} rows={10}></textarea>*/}
        {/*  <button type="submit" className={style.submitBtn}>*/}
        {/*    Send*/}
        {/*  </button>*/}
        {/*</form>*/}
        {/*<div className={style.linkContainer}><a href="">send*/}
        {/*</a></div>*/}
      </div>
    </div>
  );
};

export default Contacts;
