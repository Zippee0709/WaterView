import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { GetStations } from '../queries/stations/GetStations';

import Sidebar from '../components/ui/sidebar/Sidebar';
import Navbar from '../components/ui/navbars/Navbar';
import TextPressableCard from '../components/ui/cards/TextPressableCard';
import TextIconPressableCard from '../components/ui/cards/TextIconPressableCard';
import GraphicCard from '../components/ui/cards/GraphicCard';
import Loading from '../components/ui/loading/Loading';

import styles from '../styles/pages/Dashboard.module.scss';

const Dashboard = () => {
  const [page, SetPage] = useState(1);
  const { isLoading, isFetching, data, refetch } = useQuery('GetStation', () => GetStations({ page: page }));

  useEffect(() => {
    refetch();
  }, [page]);

  const OnClickPrevious = () => {
    if (data) {
      const newPage = page - 1 <= 0 ? data.count : page - 1;
      SetPage(newPage);
    }
  };

  const OnClickNext = () => {
    if (data) {
      const newPage = page + 1 >= data.count ? 1 : page + 1;
      SetPage(newPage);
    }
  };

  if (data === undefined) {
    return <div>Invalid Station</div>;
  }

  return (
    <div className={styles.dashboard}>
      <Sidebar selected="Dashboard" />
      <section className={styles.dashboard__content}>
        <div className={styles.dashboard__content__header}>
          <Navbar label="Overview" firstName="Zhiwen" lastName="Wang" />
        </div>
        {isLoading || isFetching ? (
          <Loading label="Chargement de la station..." />
        ) : (
          <div className={styles.dashboard__content__body}>
            <div className={styles.dashboard__content__body__informations}>
              <TextIconPressableCard label="Station précédente" icon="left" onClick={() => OnClickPrevious()} />
              <TextPressableCard label="Station actuelle" value={page.toString()} />
              <TextPressableCard label="Nombre de stations" value={data.count.toString()} />
              <TextIconPressableCard label="Station suivante" icon="right" onClick={() => OnClickNext()} />
            </div>
            <div className={styles.dashboard__content__body__graphic}>
              <GraphicCard station={data} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
