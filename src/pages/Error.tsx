import { useParams, useNavigate } from 'react-router-dom';
import Background from '../components/ui/backgrounds/Background';
import LogoNavbar from '../components/ui/navbars/LogoNavbar';
import LinearGradientButton from '../components/ui/buttons/LinearGradientButton';
import styles from '../styles/pages/Error.module.scss';

const Error = () => {
  const navigate = useNavigate();
  const { code } = useParams();

  return (
    <div className={styles.error}>
      <Background />
      <div className={styles.error__content}>
        <LogoNavbar />
        <div className={styles.error__content__body}>
          <div className={styles.error__content__body__top}>
            <h1 className={styles.error__content__body__top__title}>Erreur {code}</h1>
            <p className={styles.error__content__body__top__description}>
              Vous avez rencontré une erreur, veuillez réessayer.
            </p>
          </div>
          <div className={styles.error__content__body__bottom}>
            <LinearGradientButton label="Dashboard" onClick={() => navigate('/dashboard')} />
            <LinearGradientButton label="Liste des stations" onClick={() => navigate('/stations')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
