import React from 'react';
import Sidebar from '../components/ui/sidebar/Sidebar';
import Navbar from '../components/ui/navbars/Navbar';
import TextCard from '../components/ui/cards/TextCard';
import GraphicCard from '../components/ui/cards/GraphicCard';

import styles from '../styles/pages/Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar selected="Dashboard" />
      <section className={styles.dashboard__content}>
        <div className={styles.dashboard__content__header}>
          <Navbar label="Overview" firstName="Zhiwen" lastName="Wang" />
        </div>
        <div className={styles.dashboard__content__body}>
          <div className={styles.dashboard__content__body__informations}>
            <TextCard label="Station précédente" value="1" />
            <TextCard label="Station actuelle" value="1" />
            <TextCard label="Nombre de stations" value="24" />
            <TextCard label="Station suivante" value="1" />
          </div>
          <div className={styles.dashboard__content__body__graphic}>
            <GraphicCard label="Paris" date="12/12/2020" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
