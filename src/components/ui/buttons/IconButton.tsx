import React from 'react';

import styles from '../../../styles/components/ui/buttons/IconButton.module.scss';

interface Props {
  icon: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button className={styles['icon-button']} onClick={onClick}>
      <img className={styles['icon-button__icon']} src={icon} alt="button-icon" />
    </button>
  );
};

export default React.memo(IconButton);
