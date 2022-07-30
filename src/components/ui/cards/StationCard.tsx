import React from 'react';
import { useNavigate } from 'react-router-dom';

import TextAvatar from '../avatars/TextAvatar';
import IconButton from '../buttons/IconButton';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right.svg';
import { IStation } from '../../../types/StationsType';
import styles from '../../../styles/components/ui/cards/StationCard.module.scss';

interface Props {
  station: IStation;
}

const StationCard = ({ station }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles['station-card']}>
      <div className={styles['station-card__content']}>
        <div className={styles['station-card__content__item']}>
          <div className={styles['station-card__content__item__avatar']}>
            <TextAvatar label={station.code_departement} />
          </div>
          <div className={styles['station-card__content__item__text-container']}>
            <p className={styles['station-card__content__item__title']}>{station.libelle_station}</p>
            <p className={styles['station-card__content__item__subtitle']}>
              Dernière mise à jour le {station.date_maj_infos}
            </p>
          </div>
        </div>
        <div className={styles['station-card__content__item']}>
          <div className={styles['station-card__content__item__text-container']}>
            <p className={styles['station-card__content__item__title']}>{station.libelle_departement}</p>
            <p className={styles['station-card__content__item__subtitle']}>
              {station.code_commune} - {station.libelle_commune}
            </p>
          </div>
        </div>
        <div className={styles['station-card__content__item']}>
          <p className={styles['station-card__content__item__title']}>{station.date_mise_en_service}</p>
        </div>
        <div className={styles['station-card__content__item']}>
          <p className={styles['station-card__content__item__title']}>
            {station.code_masse_eau ? station.code_masse_eau : 'Non défini'}
          </p>
        </div>
        <div className={styles['station-card__content__button']}>
          <IconButton onClick={() => navigate(`/station/${station.code_station}`)}>
            <ArrowRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default React.memo(StationCard);
