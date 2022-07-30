import { useNavigate } from 'react-router-dom';
import Background from '../components/ui/backgrounds/Background';
import LogoNavbar from '../components/ui/navbars/LogoNavbar';
import LinearGradientButton from '../components/ui/buttons/LinearGradientButton';
import styles from '../styles/pages/Landing.module.scss';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.landing}>
      <Background />
      <div className={styles.landing__content}>
        <LogoNavbar />
        <div className={styles.landing__content__body}>
          <div className={styles.landing__content__body__top}>
            <h1 className={styles.landing__content__body__top__title}>Voir la température des cours d'eau en France</h1>
            <p className={styles.landing__content__body__top__description}>
              Le réchauffement climatique est une problématique qui nous concerne tous, les océans, les mers, et les
              différents cours d'eau ont un également un effet direct sur le changement climatique !
              <br />
              <br />
              WaterView est une application web permettant de visualiser sur un graphique l’historique de la température
              des cours d’eau en France.
            </p>
          </div>
          <div className={styles.landing__content__body__bottom}>
            <LinearGradientButton label="Let's Begin !" onClick={() => navigate('/dashboard')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
