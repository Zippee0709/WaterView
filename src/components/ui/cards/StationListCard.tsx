import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { GetStations } from '../../../queries/stations/GetStations';

import StationCard from './StationCard';
import SortButton from '../buttons/SortButton';
import Pagination from '../paginations/Pagination';
import Loading from '../loading/Loading';

import { IError } from '../../../types/ErrorType';

import styles from '../../../styles/components/ui/cards/StationListCard.module.scss';

const StationListCard = () => {
  const navigate = useNavigate();
  const [sort, setSort] = useState<string>('desc');
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, refetch } = useQuery('GetStations', () => GetStations({ page: page, size: 6 }), {
    onError: (error: AxiosError<IError>) => {
      navigate(`/error/${error.response?.data.status}`);
    },
  });

  if (isLoading === false && data === undefined) {
    navigate(`/error/404`);
    return <div>Invalid Station</div>;
  }

  const OnClickPrevious = () => {
    if (data) {
      const newPage = page - 1 <= 0 ? data.count / 6 : page - 1;
      setPage(newPage);
      refetch();
    }
  };

  const OnClickNext = () => {
    if (data) {
      const newPage = page + 1 > data.count / 6 ? 1 : page + 1;
      setPage(newPage);
      refetch();
    }
  };

  const OnClickSort = () => {
    if (data) {
      if (sort === 'desc') {
        data.data.reverse();
        setSort('asc');
      } else {
        data.data.reverse();
        setSort('desc');
      }
    }
  };

  return (
    <div className={styles['station-list-card']}>
      {isLoading || isFetching ? (
        <Loading label="Chargement des stations..." />
      ) : (
        <>
          <div className={styles['station-list-card__header']}>
            <p className={styles['station-list-card__header__title']}>Parcourir les stations</p>
            <SortButton status={sort} onClick={() => OnClickSort()} />
          </div>
          <div className={styles['station-list-card__body']}>
            <div className={styles['station-list-card__body__top']}>
              <p className={styles['station-list-card__body__top__item']}>Détail de la station</p>
              <p className={styles['station-list-card__body__top__item']}>Localisation</p>
              <p className={styles['station-list-card__body__top__item']}>Date de mise en service</p>
              <p className={styles['station-list-card__body__top__item']}>Code masse eau</p>
            </div>
            <div className={styles['station-list-card__body__content']}>
              {data?.data.map((station, key) => (
                <div key={key}>
                  <StationCard station={station} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles['station-list-card__footer']}>
            <Pagination
              current={(page - 1) * 6 + 1}
              size={page * 6 > data.count ? data.count : page * 6}
              count={data.count}
              onClickPrevious={() => OnClickPrevious()}
              onClickNext={() => OnClickNext()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default StationListCard;
