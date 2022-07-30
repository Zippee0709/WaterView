import React from 'react';
import IconButton from '../buttons/IconButton';

import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right.svg';

import styles from '../../../styles/components/ui/paginations/Pagination.module.scss';

interface Props {
  current: number | string;
  size: number | string;
  count: number | string;
  onClickPrevious?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickNext?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Pagination = ({ current, size, count, onClickPrevious, onClickNext }: Props) => {
  return (
    <div className={styles.pagination}>
      <p className={styles.pagination__label}>
        {current} - {size} of {count}
      </p>
      <div className={styles.pagination__buttons}>
        <IconButton onClick={onClickPrevious}>
          <ArrowLeftIcon className={styles.pagination__buttons__left} />
        </IconButton>
        <IconButton onClick={onClickNext}>
          <ArrowRightIcon className={styles.pagination__buttons__right} />
        </IconButton>
      </div>
    </div>
  );
};

export default React.memo(Pagination);
