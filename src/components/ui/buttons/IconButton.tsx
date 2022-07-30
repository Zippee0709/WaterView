import React from 'react';

import styles from '../../../styles/components/ui/buttons/IconButton.module.scss';

interface Props {
  children: JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton = ({ children, onClick }: Props) => {
  return (
    <button className={styles['icon-button']} onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(IconButton);
