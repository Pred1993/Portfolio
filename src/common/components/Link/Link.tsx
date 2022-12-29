import React, {FC} from 'react';
import styles from "./Link.module.scss"
type LinkPropsType = {
  text: string
  link: string
}
const Link: FC<LinkPropsType> = ({text, link}) => {
  return (
    <a className={styles.link} href={link}>{text}</a>
  );
};

export default Link;