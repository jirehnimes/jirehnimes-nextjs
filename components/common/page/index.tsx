import { FC, ReactNode, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { stateAmbiance } from '@/store';

import styles from './page.module.sass';

interface Props {
  children: ReactNode;
}

const Page: FC<Props> = ({ children }) => {
  const isDark = useRecoilValue(stateAmbiance);

  const applyDarkTheme = () => isDark === true ? 'dark' : '';

  useEffect(() => {
    document.body.className = applyDarkTheme();
  });

  return (
    <div className={styles.page}>
      {children}
    </div>
  );
};

export default Page;
