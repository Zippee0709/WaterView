import React from 'react';
import styles from '../../../styles/components/ui/buttons/LinearGradientButton.module.scss';

interface Props {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LinearGradientButton = ({ label, onClick }: Props) => {
  return (
    <button className={styles['linear-gradient-button']} onClick={onClick}>
      <p className={styles['linear-gradient-button__label']}>{label}</p>
    </button>
  );
};

export default React.memo(LinearGradientButton);
