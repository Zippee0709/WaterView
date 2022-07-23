import React, { useState } from 'react';

import GroupButton from '../buttons/GroupButton';
import InformationsCard from './InformationsCard';
import LineChart from '../charts/LineChart';

import styles from '../../../styles/components/ui/cards/GraphicCard.module.scss';

interface Props {
  label: string;
  date: string;
}

const GraphicCard = ({ label, date }: Props) => {
  const buttonItems = ['Jour', 'Semaine', 'Mois', 'Année'];
  const [selected, setSelected] = useState(buttonItems[0]);

  return (
    <div className={styles['graphic-card']}>
      <div className={styles['graphic-card__graphic']}>
        <div className={styles['graphic-card__graphic__header']}>
          <div className={styles['graphic-card__graphic__header__container']}>
            <h6 className={styles['graphic-card__graphic__header__container__title']}>{label}</h6>
            <p className={styles['graphic-card__graphic__header__container__date']}>Mise à jour le : {date}</p>
          </div>
          <div className={styles['graphic-card__graphic__header__buttons']}>
            <GroupButton items={['Jour', 'Semaine', 'Mois', 'Année']} selected={selected} setSelected={setSelected} />
          </div>
        </div>
        <div className={styles['graphic-card__graphic__body']}>
          <LineChart labels={['1', '2', '3', '4', '5']} datas={['1', '2', '3', '4', '5']} />
        </div>
      </div>

      <div className={styles['graphic-card__informations']}>
        <InformationsCard
          items={[
            { label: 'Code station', value: '10615120' },
            { label: 'Altitude', value: '690.0' },
            { label: 'Département', value: '974 - La Réunion' },
            { label: 'Commune', value: '97422 - Le Tampon' },
            { label: 'Mise en service', value: '1986-07-30' },
          ]}
        />
      </div>
    </div>
  );
};

export default React.memo(GraphicCard);
