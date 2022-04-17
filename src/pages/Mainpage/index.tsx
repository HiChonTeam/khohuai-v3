import React from 'react';
import HotNumber from './HotNumber';
import styles from './index.module.scss';
import LandingScreen from './LandingScreen';

const Mainpage: React.FC = () => {
  return (
    <div className={styles.background} id="#">
      <LandingScreen/>
      <HotNumber/>
    </div>
  )
}

export default Mainpage