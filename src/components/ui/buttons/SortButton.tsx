import React from 'react';

import { ReactComponent as SortIcon } from '../../../assets/icons/sort.svg';

import styles from '../../../styles/components/ui/buttons/SortButton.module.scss';

interface Props {
  status: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Dropdown = ({ status = 'desc', onClick }: Props) => {
  return (
    <button className={styles[`sort-button-${status}`]} onClick={onClick}>
      <SortIcon className={styles[`sort-button-${status}__icon`]} />
      <p className={styles[`sort-button-${status}__label`]}>Sort</p>
    </button>
  );
};

export default React.memo(Dropdown);
