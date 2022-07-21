import React from 'react';
import Sidebar from '../components/ui/sidebar/Sidebar';
import styles from '../styles/pages/Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar selected="Dashboard" />
      Welcome to the dashboard !
    </div>
  );
};

export default Dashboard;
