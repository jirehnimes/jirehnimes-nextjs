import { FC } from 'react';
import { Icon } from '@iconify/react';

import styles from './grid.module.sass';

const Grid: FC = () => (
  <button className={styles.grid}>
    <Icon icon="bx:bxs-grid-alt" className={styles.icon}/>
  </button>
);

export default Grid;
