import { FC, ReactNode } from 'react';

import Ambiance from './ambiance';
import Grid from './grid';
import ScrollTop from './scroll-top';

import styles from './navbar.module.sass';

interface Props {
  children?: ReactNode;
}

const Navbar: FC<Props> = () => (
  <section className={styles.navbar}>
    <Grid/>
    <Ambiance/>
    <div className={styles.name}>
      <p>JIREH NIMES</p>
    </div>
    <ScrollTop/>
  </section>
);

export default Navbar;
