import { FC, ReactNode } from 'react';

import styles from './layout.module.sass';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <section className={styles.layout}>
    { children }
  </section>
);

export default Layout;
