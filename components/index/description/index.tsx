import { FC, ReactNode } from 'react';

import styles from './description.module.sass';

interface Props {
  children: ReactNode;
}

const Description: FC<Props> = ({ children }) => (
  <section className={styles.description}>
    <h4>{ children || 'DESCRIPTION HERE' }</h4>
  </section>
);

export default Description;
