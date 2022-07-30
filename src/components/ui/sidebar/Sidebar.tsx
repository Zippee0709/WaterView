import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

import styles from '../../../styles/components/ui/sidebar/Sidebar.module.scss';

interface Props {
  selected: 'Dashboard' | 'Stations' | 'Station';
}

const Sidebar = ({ selected }: Props) => {
  return (
    <section className={styles.sidebar}>
      <SidebarHeader />
      <SidebarBody selected={selected} />
      <SidebarFooter />
    </section>
  );
};

export default React.memo(Sidebar);
