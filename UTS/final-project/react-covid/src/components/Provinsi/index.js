import styles from "./Provinsi.module.css";
import data from "../../utils/constants/provinces";

function Provinsi() {

const province = data.provinces;
let no = 0;

return(
    <div className={styles.container}>
      <section className={styles.prov}>
        <h2 className={styles.prov__title}>Provinsi</h2>
        <h3 className={styles.prov__title_h3}>Data Covid Berdasarkan Provinsi</h3>
        <div className={styles.prov__container} > 
        <table  className={styles.prov__tabel} >
            <thead>
                <tr>
                    <th>No</th>
                    <th>Provinsi</th>
                    <th>Positif</th>
                    <th>Sembuh</th>
                    <th>Dirawat</th>
                    <th>Meninggal</th>
                </tr>
                {province.map((provins, key) => {
                    no += 1;
                    return(
                    <tr key={key}>
                        <td>{no}</td>
                        <td>{provins.kota}</td>
                        <td>{provins.kasus}</td>
                        <td>{provins.sembuh}</td>
                        <td>{provins.dirawat}</td>
                        <td>{provins.meninggal}</td>
                    </tr>
                    );
                })}
               
            </thead>
        </table>
        </div>
      </section>
    </div>
);

}

export default Provinsi;