import React from 'react';

import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right.svg';

import styles from '../../../styles/components/ui/cards/TextIconPressableCard.module.scss';

interface Props {
  label: string;
  icon: 'left' | 'right';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TextIconPressableCard = ({ label, icon, onClick }: Props) => {
  return (
    <button className={styles['text-icon-pressable-card']} onClick={onClick}>
      <h2 className={styles['text-icon-pressable-card__label']}>{label}</h2>
      {icon === 'left' ? (
        <ArrowLeftIcon className={styles['text-icon-pressable-card__icon']} />
      ) : (
        <ArrowRightIcon className={styles['text-icon-pressable-card__icon']} />
      )}
    </button>
  );
};

export default React.memo(TextIconPressableCard);
