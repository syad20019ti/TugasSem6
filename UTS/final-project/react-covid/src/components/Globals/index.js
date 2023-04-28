import Global from "../Global";
import styles from "./Globals.module.css";
import data from "../../utils/constants/indonesia";

function Globals() {
  const globals = data.indonesia;

  return (
    <div className={styles.container}>
      <section className={styles.globals}>
        <h2 className={styles.globals__title}>Indonesia</h2>
        <h3 className={styles.globals__title_h3}>Data Covid Berdasarkan Global</h3>
        <div className={styles.globals__container}>
          {
            globals.map(function (global, key) {
              return <Global key={key} global={global} />;
            })
          }
        </div>
      </section>
    </div>
  );
}

export default Globals;