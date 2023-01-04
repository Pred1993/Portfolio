import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Portfolio from "../common/components/Portfolio/Portfolio";
import Title from "../common/components/Title/Title";
import SuperButton from "../common/components/SuperButton/SuperButton";
import {useFormik} from "formik";
import * as Yup from 'yup';
import SuperInput from "../common/components/SuperInput/SuperInput";
import {Reveal} from "react-awesome-reveal";


const Contacts = () => {
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
      console.log(values)
    },
  });
  return (
    <div className={styles.contactsPage} id={'contact'}>
      <Portfolio name={'Contact'}/>
        <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
          <Title textPart1={'Get in '} textPart2={'touch'}/>
          <Reveal className={styles.revealContainer}>
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>

              <SuperInput className={styles.name} placeholder={'Name'}
                          {...formik.getFieldProps('firstName')}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className={styles.errors}>{formik.errors.firstName}</div>
              )}
              <SuperInput className={styles.email} placeholder={'e-mail'}
                          {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <div className={styles.errors}>{formik.errors.email}</div>
              )}
              <textarea className={styles.message} placeholder={'Message'}
                        {...formik.getFieldProps('message')}
              />
              {formik.touched.message && formik.errors.message && (
                <div className={styles.errors}>{formik.errors.message}</div>
              )}
              <div className={styles.submitBtn}>
                <SuperButton style={{'width': '150px', marginTop: '20px', marginBottom: '20px'}}
                             type="submit"
                >
                  Sign In
                </SuperButton>
              </div>
            </form>
          </Reveal>
        </div>
    </div>
  );
};

export default Contacts;
