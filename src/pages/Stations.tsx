import React from 'react';
import Sidebar from '../components/ui/sidebar/Sidebar';
import styles from '../styles/pages/Stations.module.scss';

const Stations = () => {
  return (
    <div className={styles.stations}>
      <Sidebar selected="Stations" />
      Welcome to the Stations !
    </div>
  );
};

export default Stations;
