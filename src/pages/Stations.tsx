import React from 'react';

import Sidebar from '../components/ui/sidebar/Sidebar';
import Navbar from '../components/ui/navbars/Navbar';

import styles from '../styles/pages/Stations.module.scss';

const Stations = () => {
  return (
    <div className={styles.stations}>
      <Sidebar selected="Stations" />
      <section className={styles.stations__content}>
        <div className={styles.stations__content__header}>
          <Navbar label="Liste des stations" firstName="Zhiwen" lastName="Wang" />
        </div>
      </section>
    </div>
  );
};

export default Stations;
