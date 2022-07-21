import OceanCrab from '../../assets/images/ocean-crab.svg';
import OceanLeftBackground from '../../assets/images/ocean-left-background.svg';
import OceanBubbles from '../../assets/images/ocean-bubbles.svg';
import OceanAnimals from '../../assets/images/ocean-animals.svg';
import OceanRightBackground from '../../assets/images/ocean-right-background.svg';

import styles from '../../styles/components/landing/LandingBackground.module.scss';

const LandingBackground = () => {
  return (
    <div className={styles['landing-background']}>
      <img className={styles['landing-background__ocean-crab']} src={OceanCrab} alt="ocean-crab" />
      <img className={styles['landing-background__ocean-left']} src={OceanLeftBackground} alt="ocean-left-background" />
      <img className={styles['landing-background__ocean-bubbles']} src={OceanBubbles} alt="ocean-bubbles" />
      <img className={styles['landing-background__ocean-animals']} src={OceanAnimals} alt="ocean-animals" />
      <img
        className={styles['landing-background__ocean-right']}
        src={OceanRightBackground}
        alt="ocean-right-background"
      />
    </div>
  );
};

export default LandingBackground;
