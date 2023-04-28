import styles from "./Hello.module.css";

function Hello() {
  return (
    <div className={styles.container}>
      <section className={styles.hello}>
        <div className={styles.hello__left}>
          <h2 className={styles.hello__title}>Covid ID</h2>
          <h3 className={styles.hello__genre}>Monitoring Perkembangan Covid</h3>
          <p className={styles.hello__description}>
          Penyakit virus corona (COVID-19) adalah penyakit menular yang disebabkan oleh virus SARS-CoV-2.
          Sebagian besar orang yang tertular COVID-19 akan mengalami gejala ringan hingga sedang, dan akan pulih tanpa penanganan khusus. 
          Namun, sebagian orang akan mengalami sakit parah dan memerlukan bantuan medis.
          </p>
          <button className={styles.hello__button}><a href="https://vaksin.kemkes.go.id/#/vaccines">Vaccine</a></button>
        </div>
        <div className="hello__right">
          <img
            className={styles.hello__image}
            src="https://aufaroot18.github.io/frontend-programming/static/media/Hero.20315973ee0b6e6812f5.png"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hello;