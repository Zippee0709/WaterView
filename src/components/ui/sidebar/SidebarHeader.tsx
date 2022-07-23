import React from 'react';

import Logo from '../../../assets/icons/logo.svg';
import styles from '../../../styles/components/ui/sidebar/SidebarHeader.module.scss';

const SidebarHeader = () => {
  return (
    <div className={styles['sidebar-header']}>
      <img className={styles['sidebar-header__logo']} src={Logo} alt="app-sidebar-logo" />
      <h1 className={styles['sidebar-header__title']}>WaterView</h1>
    </div>
  );
};

export default React.memo(SidebarHeader);
