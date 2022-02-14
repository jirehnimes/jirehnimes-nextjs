import { FC, ReactNode } from 'react';

import styles from './title.module.sass';

interface Props {
  children: ReactNode;
}

const Title: FC<Props> = ({ children }) => (
  <section className={styles.title}>
    <h1>{ children || 'TITLE HERE' }</h1>
  </section>
);

export default Title;
