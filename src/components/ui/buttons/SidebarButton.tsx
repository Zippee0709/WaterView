import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as DashboardIcon } from '../../../assets/icons/dashboard.svg';
import { ReactComponent as StationIcon } from '../../../assets/icons/station.svg';

import styles from '../../../styles/components/ui/buttons/SidebarButton.module.scss';

interface Props {
  selected: string;
  label: string;
  path: string;
}

const SidebarButton = ({ selected, label, path }: Props) => {
  const navigate = useNavigate();

  const RenderSidebarIcon = (label: string) => {
    if (label === 'Dashboard') {
      return <DashboardIcon className={styles['sidebar-button__logo']} />;
    }
    return <StationIcon className={styles['sidebar-button__logo']} />;
  };

  return (
    <>
      {selected === label ? (
        <button className={styles['sidebar-button--selected']} onClick={() => window.location.reload()}>
          <div className={styles['sidebar-button--selected__select']} />
          {RenderSidebarIcon(label)}
          <p className={styles['sidebar-button--selected__label']}>{label}</p>
        </button>
      ) : (
        <button className={styles['sidebar-button']} onClick={() => navigate(path)}>
          <div id="select" className={styles['sidebar-button__select']} />
          {RenderSidebarIcon(label)}
          <p className={styles['sidebar-button__label']}>{label}</p>
        </button>
      )}
    </>
  );
};

export default React.memo(SidebarButton);
