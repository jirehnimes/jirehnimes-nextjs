import { FC } from 'react';
import { Icon } from '@iconify/react';

import styles from './scroll-top.module.sass';

const ScrollTop: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className={styles.scroll_top} onClick={scrollToTop}>
      <Icon icon="ant-design:caret-up-filled" className={styles.icon}/>
    </button>
  );
}

export default ScrollTop;
