import React from 'react';

import styles from '../../../styles/components/ui/cards/TextPressableCard.module.scss';

interface Props {
  label: string;
  value: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TextCard = ({ label, value, onClick }: Props) => {
  return (
    <button className={styles['text-pressable-card']} onClick={onClick}>
      <h2 className={styles['text-pressable-card__label']}>{label}</h2>
      <strong className={styles['text-pressable-card__value']}>{value}</strong>
    </button>
  );
};

export default React.memo(TextCard);
