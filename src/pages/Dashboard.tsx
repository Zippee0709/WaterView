import React from 'react';
import Sidebar from '../components/ui/sidebar/Sidebar';
import Navbar from '../components/ui/navbars/Navbar';
import styles from '../styles/pages/Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar selected="Dashboard" />
      <section className={styles.dashboard__content}>
        <Navbar label="Overview" firstName="Zhiwen" lastName="Wang" />
      </section>
    </div>
  );
};

export default Dashboard;
