import { FC, ReactNode } from 'react';

import styles from './button.module.sass';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => (
  <button className={styles.button}>
    { children || 'TITLE HERE' }
  </button>
);

export default Button;
