import { useState } from 'react';
import { useQuery } from 'react-query';

import { IGetStationsOutput } from '../../../types/StationsType';
import { GetStationTemperature } from '../../../queries/temperatures/GetStationTemperature';

// import GroupButton from '../buttons/GroupButton';
import InformationsCard from './InformationsCard';
import LineChart from '../charts/LineChart';
import Loading from '../loading/Loading';

import styles from '../../../styles/components/ui/cards/GraphicCard.module.scss';

interface Props {
  station: IGetStationsOutput;
}

const GraphicCard = ({ station }: Props) => {
  // const buttonItems = ['Jour', 'Semaine', 'Mois', 'Année'];
  // const [selected, setSelected] = useState(buttonItems[0]);
  const [labels, setLabels] = useState<string[]>([]);
  const [temperatures, setTemperature] = useState<number[]>([]);
  const [averageTemperature, SetAverageTemperature] = useState('0');

  const { isLoading, data, error } = useQuery(
    'GetStationTemperature',
    () => GetStationTemperature({ id: station.data[0].code_station, page: 1 }),
    {
      onSuccess: data => {
        const labels = data.data.map(item => item.heure_mesure_temp.slice(0, -3));
        setLabels(labels.reverse());
        const temperatures = data.data.map(item => item.resultat);
        setTemperature(temperatures.reverse());
        const sum = temperatures.reduce((a, b) => a + b, 0);
        const avg = sum / temperatures.length || 0;
        SetAverageTemperature(avg.toFixed(1).toString());
      },
    },
  );

  if (station === undefined || data === undefined) {
    return <div>Invalid Station</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className={styles['graphic-card']}>
      {isLoading ? (
        <Loading label="Chargement des données de la station..." />
      ) : (
        <>
          <div className={styles['graphic-card__graphic']}>
            <div className={styles['graphic-card__graphic__header']}>
              <div className={styles['graphic-card__graphic__header__container']}>
                <h6 className={styles['graphic-card__graphic__header__container__title']}>
                  Nom de la station : {station.data[0].libelle_station}
                </h6>
                <p className={styles['graphic-card__graphic__header__container__date']}>
                  Dernier prélèvement le {data.data[0].date_mesure_temp} à {data.data[0].heure_mesure_temp}
                </p>
              </div>
              {/* <div className={styles['graphic-card__graphic__header__buttons']}>
                <GroupButton
                  items={['Jour', 'Semaine', 'Mois', 'Année']}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div> */}
            </div>
            <div className={styles['graphic-card__graphic__body']}>
              <LineChart labels={labels} datas={temperatures} />
            </div>
            <div className={styles['graphic-card__graphic__footer']}>
              <p className={styles['graphic-card__graphic__footer__label']}>Affiche les 30 derniers prélèvements</p>
            </div>
          </div>

          <div className={styles['graphic-card__informations']}>
            <InformationsCard
              items={[
                { label: 'Code station', value: station.data[0].code_station },
                { label: 'Température moyenne', value: `${averageTemperature} ${data.data[0].symbole_unite}` },
                {
                  label: 'Département',
                  value: `${station.data[0].code_departement} - ${station.data[0].libelle_departement}`,
                },
                { label: 'Commune', value: `${station.data[0].code_commune} - ${station.data[0].libelle_commune}` },
                { label: 'Mise en service', value: station.data[0].date_mise_en_service },
              ]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default GraphicCard;
