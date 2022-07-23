import { useNavigate } from 'react-router-dom';
import { ReactComponent as ExitIcon } from '../../../assets/icons/exit.svg';
import styles from '../../../styles/components/ui/sidebar/SidebarFooter.module.scss';

const UNSELECTED_COLOR = '#9FA2B4';

const SidebarFooter = () => {
  const navigate = useNavigate();

  return (
    <button className={styles['sidebar-footer']} onClick={() => navigate('/')}>
      <div className={styles['sidebar-footer__background']} />
      <ExitIcon className={styles['sidebar-footer__logo']} fill={UNSELECTED_COLOR} stroke={UNSELECTED_COLOR} />
      <p className={styles['sidebar-footer__label']}>Déconnexion</p>
    </button>
  );
};

export default SidebarFooter;
