import React, {FC} from 'react';
import styles from './Portfolio.module.scss';
type PortfolioType = {
  name: string
}
const Portfolio: FC<PortfolioType> = ({name}) => {
  return (
    <div className={styles.portfolio}>
      {name}
    </div>
  );
};

export default Portfolio;
