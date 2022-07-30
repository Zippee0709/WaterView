import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { GetStation } from '../queries/stations/GetStation';

import Sidebar from '../components/ui/sidebar/Sidebar';
import Navbar from '../components/ui/navbars/Navbar';
import TextPressableCard from '../components/ui/cards/TextPressableCard';
import GraphicCard from '../components/ui/cards/GraphicCard';
import Loading from '../components/ui/loading/Loading';

import { IError } from '../types/ErrorType';

import styles from '../styles/pages/Station.module.scss';

const Station = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, isFetching, data } = useQuery('GetStation', () => GetStation({ id: id as string }), {
    onError: (error: AxiosError<IError>) => {
      navigate(`/error/${error.response?.data.status}`);
    },
  });

  if (isLoading === false && data === undefined) {
    navigate(`/error/404`);
    return <div>Invalid Station</div>;
  }

  return (
    <div className={styles.station}>
      <Sidebar selected="Station" />
      <section className={styles.station__content}>
        <div className={styles.station__content__header}>
          <Navbar label="Détail de la station" firstName="Zhiwen" lastName="Wang" />
        </div>
        {isLoading || isFetching ? (
          <Loading label="Chargement de la station..." />
        ) : (
          <div className={styles.station__content__body}>
            <div className={styles.station__content__body__graphic}>
              <GraphicCard station={data} />
            </div>
            <div className={styles.station__content__body__informations}>
              <TextPressableCard
                label="Nature de la station"
                value={data.data[0].nature_station ? data.data[0].nature_station : 'Non défini'}
              />
              <TextPressableCard label="Altitude" value={`${data.data[0].altitude.toString()} mètre(s)`} />
              <TextPressableCard
                label="Code masse d'eau"
                value={data.data[0].code_masse_eau ? data.data[0].code_masse_eau : 'Non défini'}
              />
              <TextPressableCard
                label="Mise à jour de la station"
                value={data.data[0].date_maj_infos ? data.data[0].date_maj_infos : 'Non défini'}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Station;
