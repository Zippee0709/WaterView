import { useNavigate } from 'react-router-dom';
import LinearGradientButton from '../ui/buttons/LinearGradientButton';
import styles from '../../styles/components/landing/LandingActions.module.scss';

const LandingActions = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['landing-actions']}>
      <LinearGradientButton label="Let's Begin !" onClick={() => navigate('/dashboard')} />
    </div>
  );
};

export default LandingActions;
