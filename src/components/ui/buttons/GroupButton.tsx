import React from 'react';

import styles from '../../../styles/components/ui/buttons/GroupButton.module.scss';

interface Props {
  items: string[];
  selected: string;
  setSelected: (selected: string) => void;
}

const GroupButton = ({ items, selected, setSelected }: Props) => {
  return (
    <div className={styles['group-button']}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`${styles['group-button__item']} ${selected === item && styles['group-button__item--selected']}`}
          onClick={() => setSelected(item)}
        >
          <p className={styles['group-button__item__label']}>{item}</p>
        </button>
      ))}
    </div>
  );
};

export default React.memo(GroupButton);
