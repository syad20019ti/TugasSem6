import styles from "./Global.module.css";

function Global(props) {
  const { global } = props;

  return (
    <div className={styles.global}>
      <div className={styles.global__kolom}>
        <div className={styles.global__card}>
        <h3 className={styles.global__status}>{global.status}</h3>
        <h1 className={styles.global__total}>{global.total}</h1>
        </div>
      </div>
    </div>
  );
}

export default Global;