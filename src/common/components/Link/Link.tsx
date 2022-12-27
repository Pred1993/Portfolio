import React, {FC} from 'react';
import styles from "./Link.module.scss"
type LinkPropsType = {
  text: string
}
const Link: FC<LinkPropsType> = ({text}) => {
  return (
    <a className={styles.link} href="">{text}</a>
  );
};

export default Link;