import Logo from '../../assets/icons/logo.svg';

import styles from '../../styles/components/landing/LandingNavbar.module.scss';

const LandingNavbar = () => {
  return (
    <section className={styles['landing-navbar']}>
      <div className={styles['landing-navbar__left']}>
        <img className={styles['landing-navbar__left__logo']} src={Logo} alt="app-logo" />
        <h6 className={styles['landing-navbar__left__title']}>WaterView</h6>
      </div>
    </section>
  );
};

export default LandingNavbar;
