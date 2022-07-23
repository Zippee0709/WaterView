import React from 'react';

import styles from '../../../styles/components/ui/avatars/TextAvatar.module.scss';

interface Props {
  firstName: string;
  lastName: string;
}

const TextAvatar = ({ firstName, lastName }: Props) => {
  return (
    <div className={styles['text-avatar']}>
      <p className={styles['text-avatar__label']}>
        {firstName[0]}
        {lastName[0]}
      </p>
    </div>
  );
};

export default React.memo(TextAvatar);
