import React from 'react';

import styles from '../../../styles/components/ui/dividers/Divider.module.scss';

interface Props {
  type: 'horizontal' | 'vertical';
}

const Divider = ({ type = 'horizontal' }: Props) => {
  return (
    <div
      className={`${styles.divider} ${type === 'horizontal' ? styles.divider__horizontal : styles.divider__vertical}`}
    />
  );
};

export default React.memo(Divider);
