import React from 'react';

import styles from '../../../styles/components/ui/cards/InformationsCard.module.scss';

interface Props {
  items: {
    label: string;
    value: string;
  }[];
}

const InformationsCard = ({ items }: Props) => {
  return (
    <div className={styles['informations-card']}>
      {items.map((item, index) => (
        <div className={styles['informations-card__item']} key={index}>
          <h4 className={styles['informations-card__item__label']}>{item.label}</h4>
          <strong className={styles['informations-card__item__value']}>{item.value}</strong>
        </div>
      ))}
    </div>
  );
};

export default React.memo(InformationsCard);
