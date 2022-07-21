import React from 'react';

import LandingBackground from '../components/landing/LandingBackground';
import LandingNavbar from '../components/landing/LandingNavbar';
import LandingBody from '../components/landing/LandingBody';
import LandingActions from '../components/landing/LandingActions';

import styles from '../styles/pages/Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <LandingBackground />
      <div className={styles.landing__content}>
        <LandingNavbar />
        <div className={styles.landing__content__body}>
          <LandingBody />
          <LandingActions />
        </div>
      </div>
    </div>
  );
};

export default Landing;
