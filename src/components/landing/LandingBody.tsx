import styles from '../../styles/components/landing/LandingBody.module.scss';

const LandingBody = () => {
  return (
    <div className={styles['landing-body']}>
      <h1 className={styles['landing-body__title']}>Visualiser la température des cours d'eau en France</h1>
      <p className={styles['landing-body__description']}>
        Le réchauffement climatique est une problématique qui nous concerne tous, les océans, les mers, et les
        différents cours d'eau ont un également un effet direct sur le changement climatique.
        <br />
        WaterView est une application web permettant de visualiser sur un graphique l’historique de la température des
        cours d’eau en France.
      </p>
    </div>
  );
};

export default LandingBody;
