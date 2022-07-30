import React, { useState } from 'react';
import IconButton from '../buttons/IconButton';

import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right.svg';

import styles from '../../../styles/components/ui/paginations/Pagination.module.scss';

interface Props {
  page: number;
  offset: number;
  count: number;
  setPage: (page: number) => void;
  onClickPrevious?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickNext?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Pagination = ({ page, offset, count, setPage, onClickPrevious, onClickNext }: Props) => {
  const current = (page - 1) * offset + 1;
  const to = page * 6 > count ? count : page * 6;
  const min = 1;
  const max = count / 6;
  const [value, setValue] = useState(page);

  const OnChangeValue = (value: number) => {
    if (value >= min && value <= max) {
      setValue(value);
    }
  };

  const OnChangePage = () => {
    if (value >= min && value <= max) {
      setPage(value);
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__page}>
        <p className={styles.pagination__label}>Page: </p>
        <input
          className={styles.pagination__input}
          type="number"
          placeholder="page"
          min={min}
          max={max}
          value={value}
          onChange={e => OnChangeValue(parseInt(e.target.value))}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              OnChangePage();
            }
          }}
        />
        <p className={styles.pagination__label}>
          {min} à {max}
        </p>
      </div>
      <p className={styles.pagination__label}>
        {current} - {to} sur {count}
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

export default Pagination;
