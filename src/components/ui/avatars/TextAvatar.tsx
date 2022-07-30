import React from 'react';

import styles from '../../../styles/components/ui/avatars/TextAvatar.module.scss';

interface Props {
  label: string;
}

const TextAvatar = ({ label }: Props) => {
  return (
    <div className={styles['text-avatar']}>
      <p className={styles['text-avatar__label']}>{label}</p>
    </div>
  );
};

export default React.memo(TextAvatar);
