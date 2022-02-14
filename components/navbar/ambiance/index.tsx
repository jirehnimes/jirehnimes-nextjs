import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { stateAmbiance } from '@/store';

import styles from './ambiance.module.sass';

const Ambiance: FC = () => {
  const [isDark, setAmbiance] = useRecoilState(stateAmbiance);

  const toggleAmbiance = () => setAmbiance(state => !state);

  return (
    <label className={styles.ambiance}>
      <input type="checkbox" checked={isDark} onChange={toggleAmbiance}/>
      <span className={styles.slider}></span>
    </label>
  );
}

export default Ambiance;
