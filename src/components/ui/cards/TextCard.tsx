import React from 'react';

import styles from '../../../styles/components/ui/cards/TextCard.module.scss';

interface Props {
  label: string;
  value: string;
}

const TextCard = ({ label, value }: Props) => {
  return (
    <button className={styles['text-card']}>
      <h2 className={styles['text-card__label']}>{label}</h2>
      <strong className={styles['text-card__value']}>{value}</strong>
    </button>
  );
};

export default React.memo(TextCard);
