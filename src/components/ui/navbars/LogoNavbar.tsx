import Logo from '../../../assets/icons/logo.svg';
import styles from '../../../styles/components/ui/navbars/LogoNavbar.module.scss';

const LogoNavbar = () => {
  return (
    <section className={styles['logo-navbar']}>
      <div className={styles['logo-navbar__left']}>
        <img className={styles['logo-navbar__left__logo']} src={Logo} alt="app-logo" />
        <h6 className={styles['logo-navbar__left__title']}>WaterView</h6>
      </div>
    </section>
  );
};

export default LogoNavbar;
