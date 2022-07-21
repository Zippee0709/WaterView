import LinearGradientButton from '../ui/buttons/LinearGradientButton';
import styles from '../../styles/components/landing/LandingActions.module.scss';

const LandingActions = () => {
  return (
    <div className={styles['landing-actions']}>
      <LinearGradientButton label="Let's Begin !" />
    </div>
  );
};

export default LandingActions;
