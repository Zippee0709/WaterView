import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';

import styles from '../../../styles/components/ui/sidebar/Sidebar.module.scss';

interface Props {
  selected: 'Dashboard' | 'Stations';
}

const Sidebar = ({ selected }: Props) => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <SidebarBody selected={selected} />
    </div>
  );
};

export default React.memo(Sidebar);
