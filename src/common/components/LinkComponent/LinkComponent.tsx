import React, {FC} from 'react';
import styles from "./LinkComponent.module.scss"
import {Link} from "react-scroll";
type LinkPropsType = {
  text: string
  link: string
}
const LinkComponent: FC<LinkPropsType> = ({text, link}) => {
  return (
    <a className={styles.link} href={link} >
      <Link activeClass={styles.active}
            to={link}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={500}
            delay={100}
            isDynamic={true}
            ignoreCancelEvents={false}
      >
        {text}
      </Link>
    </a>
  );
};

export default LinkComponent;