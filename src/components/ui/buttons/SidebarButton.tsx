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

const SELECTED_COLOR = '#DDE2FF';
const UNSELECTED_COLOR = '#9FA2B4';

const SidebarButton = ({ selected, label, path }: Props) => {
  const navigate = useNavigate();

  const RenderSidebarIcon = (label: string, color: string = UNSELECTED_COLOR) => {
    if (label === 'Dashboard') {
      return <DashboardIcon className={styles['sidebar-button__logo']} fill={color} stroke={color} />;
    }
    return <StationIcon className={styles['sidebar-button__logo']} fill={color} stroke={color} />;
  };

  return (
    <>
      {selected === label ? (
        <button className={styles['sidebar-button--selected']} onClick={() => window.location.reload()}>
          <div className={styles['sidebar-button--selected__select']} />
          <div className={styles['sidebar-button--selected__background']} />
          {RenderSidebarIcon(label, SELECTED_COLOR)}
          <p className={styles['sidebar-button--selected__label']}>{label}</p>
        </button>
      ) : (
        <button className={styles['sidebar-button']} onClick={() => navigate(path)}>
          <div className={styles['sidebar-button__select']} />
          {RenderSidebarIcon(label, UNSELECTED_COLOR)}
          <p className={styles['sidebar-button__label']}>{label}</p>
        </button>
      )}
    </>
  );
};

export default React.memo(SidebarButton);
