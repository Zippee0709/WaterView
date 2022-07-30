import React from 'react';

import IconButton from '../buttons/IconButton';
import Divider from '../dividers/Divider';
import TextAvatar from '../avatars/TextAvatar';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import styles from '../../../styles/components/ui/navbars/Navbar.module.scss';

interface Props {
  label: string;
  firstName: string;
  lastName: string;
}

const Navbar = ({ label, firstName, lastName }: Props) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar__label}>{label}</h1>
      <div className={styles.navbar__actions}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className={styles.navbar__divider}>
        <Divider type="vertical" />
      </div>
      <button className={styles.navbar__user}>
        <p className={styles.navbar__user__name}>
          {firstName} {lastName}
        </p>
        <TextAvatar label={firstName[0] + lastName[0]} />
      </button>
    </div>
  );
};

export default React.memo(Navbar);
