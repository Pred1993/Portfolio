import React, {FormEvent, useRef} from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Portfolio from "../common/components/Portfolio/Portfolio";
import Title from "../common/components/Title/Title";
import SuperButton from "../common/components/SuperButton/SuperButton";
import {useFormik} from "formik";
import * as Yup from 'yup';
import SuperInput from "../common/components/SuperInput/SuperInput";
import {Reveal} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_ucrc7w6', 'template_uk49q98', e.target as HTMLFormElement, 'WaJg8C6QMrE2XHTdD')
      .then((result) => {
        debugger
        console.log(result.text);
        console.log('message send')
      }, (error) => {
        console.log(error.text);
      });
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      firstName: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      // console.log(values)
      // console.log(form.current)
      // emailjs.sendForm('service_ucrc7w6', 'template_uk49q98', form.current, 'WaJg8C6QMrE2XHTdD')
      //   .then((result) => {
      //     console.log(result.text);
      //     console.log('message sent')
      //   }, (error) => {
      //     console.log(error.text);
      //   });
    },
  });
  return (
    <div className={styles.contactsPage} id={'contact'}>
      <Portfolio name={'Contact'}/>
      <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
        <Title textPart1={'Get in '} textPart2={'touch'}/>
        <Reveal className={styles.revealContainer}>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="firstName" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
          {/*@ts-ignore*/}
          {/*<form ref={form} onSubmit={formik.handleSubmit} className={styles.formContainer}>*/}

          {/*  <SuperInput className={styles.name} placeholder={'firstName'}*/}
          {/*              {...formik.getFieldProps('firstName')}*/}
          {/*  />*/}
          {/*  {formik.touched.firstName && formik.errors.firstName && (*/}
          {/*    <div className={styles.errors}>{formik.errors.firstName}</div>*/}
          {/*  )}*/}
          {/*  <SuperInput className={styles.email} placeholder={'email'}*/}
          {/*              {...formik.getFieldProps('email')}*/}
          {/*  />*/}
          {/*  {formik.touched.email && formik.errors.email && (*/}
          {/*    <div className={styles.errors}>{formik.errors.email}</div>*/}
          {/*  )}*/}
          {/*  <textarea className={styles.message} placeholder={'message'}*/}
          {/*            {...formik.getFieldProps('message')}*/}
          {/*  />*/}
          {/*  {formik.touched.message && formik.errors.message && (*/}
          {/*    <div className={styles.errors}>{formik.errors.message}</div>*/}
          {/*  )}*/}
          {/*  <div className={styles.submitBtn}>*/}
          {/*    <SuperButton style={{'width': '150px', marginTop: '20px'}}*/}
          {/*                 type="submit"*/}
          {/*    >*/}
          {/*      Sign In*/}
          {/*    </SuperButton>*/}
          {/*  </div>*/}
          {/*</form>*/}
        </Reveal>
      </div>
    </div>
  );
};

export default Contacts;
