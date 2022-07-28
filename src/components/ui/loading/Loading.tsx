import React from 'react';

import styles from '../../../styles/components/ui/loading/Loading.module.scss';

interface Props {
  label: string;
}

const Loading = ({ label }: Props) => {
  return (
    <div className={styles.loading}>
      <p className={styles.loading__label}>{label}</p>
      <div className={styles.loading__loader} />
    </div>
  );
};

export default React.memo(Loading);
