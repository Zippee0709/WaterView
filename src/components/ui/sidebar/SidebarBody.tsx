import React from 'react';

import SidebarButton from '../buttons/SidebarButton';

import styles from '../../../styles/components/ui/sidebar/SidebarBody.module.scss';

interface ISidebarItem {
  label: string;
  path: string;
}

const SidebarItems: ISidebarItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    label: 'Stations',
    path: '/stations',
  },
];

interface Props {
  selected: 'Dashboard' | 'Stations';
}

const SidebarBody = ({ selected }: Props) => {
  return (
    <div className={styles['sidebar-body']}>
      <ul className={styles['sidebar-body__list']}>
        {SidebarItems.map((item, index) => (
          <li key={index} className={styles['sidebar-body__list__item']}>
            <SidebarButton selected={selected} label={item.label} path={item.path} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SidebarBody);
