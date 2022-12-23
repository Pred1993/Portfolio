import React, {FC} from 'react';
import styles from './Portfolio.module.scss';
type PortfolioType = {
  name: string
}
const Portfolio: FC<PortfolioType> = ({name}) => {
  return (
    <div>
      <span className={styles.portfolio}>{name}</span>
    </div>
  );
};

export default Portfolio;
